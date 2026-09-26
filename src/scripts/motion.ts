/**
 * Motor de movimiento. Sin librerías: solo IntersectionObserver, request-
 * Animation-Frame y transform/opacity, para no provocar reflujo de layout.
 * Todo se desactiva con prefers-reduced-motion.
 */

const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* El revelado nace oculto solo si este script se ejecuto. Anadir la clase
   aqui es lo que separa "animacion pendiente" de "contenido invisible". */
document.documentElement.classList.add('con-js');

/* --- Progreso de lectura ------------------------------------------------- */

function progreso(): void {
  const barra = document.getElementById('progreso');
  if (!barra) return;
  let pendiente = false;

  const medir = () => {
    const alto = document.documentElement.scrollHeight - window.innerHeight;
    const p = alto > 0 ? Math.min(1, window.scrollY / alto) : 0;
    barra.style.transform = `scaleX(${p})`;
    pendiente = false;
  };

  const alScroll = () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(medir);
  };

  window.addEventListener('scroll', alScroll, { passive: true });
  window.addEventListener('resize', alScroll, { passive: true });
  medir();
}

/* --- Revelado escalonado -------------------------------------------------- */

function revelar(): void {
  const blancos = document.querySelectorAll<HTMLElement>('[data-reveal], [data-fig]');

  if (reducido) {
    blancos.forEach((el) => el.classList.add('revelado', 'revelada'));
    return;
  }

  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('revelado', 'revelada');
        io.unobserve(e.target);
      }
    },
    // threshold 0: basta un pixel. Con 0.15, un bloque mas alto que seis
    // pantallas no llega nunca al 15 % y queda invisible para siempre.
    { threshold: 0, rootMargin: '0px 0px -8% 0px' },
  );

  blancos.forEach((el) => io.observe(el));
}

/* --- Contadores ----------------------------------------------------------- */

function contadores(): void {
  const nodos = document.querySelectorAll<HTMLElement>('[data-contador]');

  const arrancar = (el: HTMLElement) => {
    const meta = Number(el.dataset.contador);
    if (!Number.isFinite(meta)) return;

    // El valor final ya esta escrito en el HTML prerenderizado. Solo lo
    // sustituimos si de verdad vamos a animarlo: en una pestana de fondo
    // requestAnimationFrame no avanza y el lector se quedaria con un 0.
    if (reducido || document.hidden) return;

    const duracion = 1100;
    let inicio = 0;

    const paso = (ts: number) => {
      if (!inicio) inicio = ts;
      const t = Math.min(1, (ts - inicio) / duracion);
      const suave = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(meta * suave).toLocaleString('es-PE');
      if (t < 1) requestAnimationFrame(paso);
    };

    requestAnimationFrame(paso);
  };

  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        arrancar(e.target as HTMLElement);
        io.unobserve(e.target);
      }
    },
    { threshold: 0.6 },
  );

  nodos.forEach((n) => io.observe(n));

  // Red de seguridad: si el cruce ocurrio con la pestana oculta y aun asi
  // llego a escribirse un cero, al volver visible se restaura el valor real.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    nodos.forEach((n) => {
      const meta = Number(n.dataset.contador);
      if (Number.isFinite(meta) && n.textContent?.trim() === '0') {
        n.textContent = meta.toLocaleString('es-PE');
      }
    });
  });
}

/* --- Scrollytelling: el texto arma el diagrama ---------------------------- */

const activos: Record<string, string[]> = {
  puerta: ['n-alumno', 'n-docente', 'a-puerta-1', 'a-puerta-2', 'paquete-1', 'paquete-2'],
  permiso: ['n-puerta', 'a-portal', 'etiqueta-praa', 'paquete-3'],
  dato: ['n-portal', 'n-base', 'n-registro', 'a-base', 'a-registro', 'etiqueta-cifrado', 'etiqueta-decm'],
  cadencia: ['anillo'],
};

function scrolly(): void {
  const pasos = document.querySelectorAll<HTMLElement>('[data-paso]');
  const flujo = document.getElementById('flujo');
  const contador = document.getElementById('flujo-contador');
  if (!pasos.length || !flujo) return;

  // El oscurecido y el trazado pendiente solo existen si este script corre.
  // Sin JS, o si el observador no dispara, el metodo se lee completo.
  flujo.classList.add('armado');
  pasos.forEach((p) => p.classList.add('armado'));

  const marcar = (clave: string, encendido: boolean) => {
    for (const id of activos[clave] ?? []) {
      flujo.querySelector(`#${id}`)?.classList.toggle('activo', encendido);
    }
  };

  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        const el = e.target as HTMLElement;
        const clave = el.dataset.paso!;
        const encendido = e.isIntersecting;
        el.classList.toggle('activo', encendido);
        marcar(clave, encendido);
        if (encendido && contador) {
          contador.textContent = `${el.dataset.numero} / 04`;
        }
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  );

  pasos.forEach((p) => io.observe(p));
}

/* --- Capitulo activo en la navegacion ------------------------------------- */

function navegacion(): void {
  const enlaces = document.querySelectorAll<HTMLAnchorElement>('[data-nav]');
  if (!enlaces.length) return;

  const mapa = new Map<string, HTMLAnchorElement>();
  enlaces.forEach((a) => mapa.set(a.dataset.nav!, a));

  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        const enlace = mapa.get(e.target.id);
        if (!enlace) continue;
        if (e.isIntersecting) {
          enlaces.forEach((x) => x.classList.remove('activo'));
          enlace.classList.add('activo');
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );

  for (const id of mapa.keys()) {
    const seccion = document.getElementById(id);
    if (seccion) io.observe(seccion);
  }
}

/* --- Impresion: abrir todo lo plegable ---------------------------------- */

function impresion(): void {
  const abrir = () =>
    document.querySelectorAll<HTMLDetailsElement>('details').forEach((d) => d.setAttribute('open', ''));
  addEventListener('beforeprint', abrir);
  // Safari no implementa beforeprint; matchMedia es el respaldo habitual.
  const mq = matchMedia('print');
  if (mq.addEventListener) mq.addEventListener('change', (e) => e.matches && abrir());
}

progreso();
revelar();
contadores();
scrolly();
navegacion();
impresion();
