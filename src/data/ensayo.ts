import { citaDe } from './fuentes';

/**
 * Toda cifra lleva su base muestral y su margen declarados en la fuente.
 * Ninguna se presenta sin denominador: es el criterio que reemplaza al
 * adjetivo alarmista.
 */
export type Metrica = {
  valor: string;
  sufijo?: string;
  cuenta?: number;
  que: string;
  base: string;
  fuenteId: string;
};

export const metricas: Metrica[] = [
  {
    valor: '98',
    sufijo: '%',
    cuenta: 98,
    que: 'de las instituciones de educación superior identificó al menos una brecha o ataque en los últimos 12 meses.',
    base: 'Base: 49 HEI · Reino Unido · margen ±11,9 pp',
    fuenteId: 'dsit-2026',
  },
  {
    valor: '96',
    sufijo: '%',
    cuenta: 96,
    que: 'de las que sufrieron una brecha señalan el phishing como su amenaza principal.',
    base: 'Base: educación superior y further education combinadas',
    fuenteId: 'dsit-2026',
  },
  {
    valor: '49',
    sufijo: '%',
    cuenta: 49,
    que: 'guardaba datos personales de estudiantes o empleados sin anonimizar ni cifrar.',
    base: 'Base: 49 HEI · educación superior',
    fuenteId: 'dsit-2026',
  },
  {
    valor: '27',
    sufijo: '%',
    cuenta: 27,
    que: 'reportó brechas o ataques al menos semanalmente. Es el número que sustituye al 43% mal atribuido.',
    base: 'Base: FE + HE · consistente con 2024/2025',
    fuenteId: 'dsit-2026',
  },
  {
    valor: '86',
    sufijo: '%',
    cuenta: 86,
    que: 'de las universidades tenía planes de continuidad de negocio que cubrían ciberseguridad.',
    base: 'Base: 49 HEI · el indicador de mejora, no del miedo',
    fuenteId: 'dsit-2026',
  },
  {
    valor: '15.000',
    sufijo: '/día',
    cuenta: 15000,
    que: 'mensajes con códigos QR maliciosos dirigidos al sector educativo.',
    base: 'Telemetría Microsoft Defender para Office 365',
    fuenteId: 'microsoft-2024',
  },
];

export type Caso = {
  id: string;
  donde: string;
  cuando: string;
  quePaso: string;
  cita: { texto: string; fuenteId: string };
  matiz: string;
  marca?: 'uba' | 'unam';
};

export const casos: Caso[] = [
  {
    id: 'uba',
    donde: 'Universidad de Buenos Aires',
    cuando: 'diciembre 2023',
    quePaso:
      'Un ransomware afectó servidores del datacenter y suspendió temporalmente inscripción a materias, carga de notas y revisiones en Guaraní.',
    cita: {
      fuenteId: 'uba-2023',
      texto: citaDe(
        'uba-2023',
        'Las inscripciones a materias y actividades se irán restableciendo por facultad',
      ).texto,
    },
    matiz:
      'La versión anterior del sitio decía que el ataque «paralizó la universidad por semanas». El comunicado propio muestra otra cosa: hubo cronograma alternativo por facultad y lo que se prolongó fue el restablecimiento completo.',
    marca: 'uba',
  },
  {
    id: 'roma-tre',
    donde: 'Roma Tre University (Italia)',
    cuando: 'reportado en 2026',
    quePaso:
      'Un ransomware reivindicado por el grupo INC interrumpió los servicios digitales de la universidad.',
    cita: {
      fuenteId: 'enisa-2026',
      texto: citaDe(
        'enisa-2026',
        'rendering websites, student portals and educational platforms',
      ).texto,
    },
    matiz:
      'Es el caso que documenta el efecto exacto que antes se afirmaba sin fuente: portales de alumnos y Moodle inaccesibles. Procede de la tabla de incidentes de ENISA; el mes no es atribuible con certeza desde la extracción del PDF.',
  },
  {
    id: 'unam',
    donde: 'UNAM (México)',
    cuando: 'enero 2026',
    quePaso:
      'Se detectó una intrusión no autorizada en cinco de sus más de cien mil sistemas informáticos.',
    cita: {
      fuenteId: 'unam-2026',
      texto: citaDe(
        'unam-2026',
        'no hay indicios de extracción de información de los sistemas de datos personales',
      ).texto,
    },
    matiz:
      'Sustituye al caso «UNAM 2024, phishing dirigido a credenciales», que no pudo verificarse en ninguna fuente primaria: aparecía solo en la lista de un blog de empresa, sin enlace. Además, este boletín es modelo de cómo se informa sin alarmar: confirma, acota y niega.',
    marca: 'unam',
  },
];

export type Fase = { n: string; titulo: string; que: string; fuenteId: string };

export const fases: Fase[] = [
  {
    n: '01',
    titulo: 'Inicio',
    que: 'Entrevista para recopilar información detallada sobre los recursos a auditar y estimar los requisitos necesarios.',
    fuenteId: 'leon-acurio-2024',
  },
  {
    n: '02',
    titulo: 'Planificación',
    que: 'Se establecen las actividades, los objetivos, los métodos y los presupuestos de la auditoría.',
    fuenteId: 'leon-acurio-2024',
  },
  {
    n: '03',
    titulo: 'Ejecución',
    que: 'Se desarrollan las tareas planificadas según los lineamientos definidos.',
    fuenteId: 'leon-acurio-2024',
  },
  {
    n: '04',
    titulo: 'Revisión',
    que: 'Se verifica la correspondencia entre los riesgos identificados y el plan de acción, mediante técnicas de muestreo.',
    fuenteId: 'leon-acurio-2024',
  },
  {
    n: '05',
    titulo: 'Documentación',
    que: 'Se organiza y documenta el trabajo, asegurando su utilidad para aclaraciones futuras y seguimiento de desviaciones.',
    fuenteId: 'leon-acurio-2024',
  },
];

export type Control = {
  nombre: string;
  referencia: string;
  dice: string;
  fuenteId: string;
};

export const controles: Control[] = [
  {
    nombre: 'Accesos y permisos',
    referencia: 'NIST CSF 2.0 · PR.AA-05',
    dice: 'Permisos y derechos definidos en una política, gestionados, aplicados y revisados, con mínimo privilegio y separación de funciones.',
    fuenteId: 'nist-csf',
  },
  {
    nombre: 'Gobernanza',
    referencia: 'NIST CSF 2.0 · GOVERN',
    dice: 'La estrategia, las expectativas y la política de gestión de riesgo cibernético de la organización se establecen, comunican y supervisan.',
    fuenteId: 'nist-csf',
  },
  {
    nombre: 'Auditoría periódica',
    referencia: 'ISO/IEC 27001 · cláusula 9.2',
    dice: 'Auditorías internas a intervalos programados, regidas por un proceso formal.',
    fuenteId: 'tuv-2024',
  },
  {
    nombre: 'Método de auditoría',
    referencia: 'ISO 19011:2018',
    dice: 'Guías para auditar sistemas de gestión: principios, gestión del programa de auditoría y conducción de las auditorías.',
    fuenteId: 'iso-19011',
  },
  {
    nombre: 'Cadencia legal',
    referencia: 'RD 311/2022 · art. 31 (España)',
    dice: 'Auditoría regular ordinaria al menos cada dos años, y extraordinaria ante modificaciones sustanciales.',
    fuenteId: 'rd-311-2022',
  },
  {
    nombre: 'Responsabilidad',
    referencia: 'NCSC · 10 Steps',
    dice: 'La ciberseguridad queda firmemente dentro de la responsabilidad del órgano directivo de la organización.',
    fuenteId: 'ncsc-10steps',
  },
];

export type Limite = {
  quien: string;
  cita: { texto: string; fuenteId: string };
  implica: string;
};

/**
 * La sección que sostiene el tono neutral: cada límite lo declara la propia
 * fuente, no lo inventa este ensayo.
 */
export const limites: Limite[] = [
  {
    quien: 'Una auditoría ISO no lo revisa todo',
    cita: {
      fuenteId: 'tuv-2024',
      texto: citaDe('tuv-2024', 'one or two examples of each key process').texto,
    },
    implica:
      'El auditor trabaja con agenda apretada y muestrea. Auditar no equivale a garantizar ausencia de fallos.',
  },
  {
    quien: 'El estudio regional más citado es reconocimiento pasivo',
    cita: {
      fuenteId: 'hackmetrix-2025',
      texto: citaDe('hackmetrix-2025', 'Se limita únicamente al reconocimiento pasivo').texto,
    },
    implica:
      'Lo que la fuente puede afirmar es qué era visible desde fuera, no qué debilidades tiene la institución por dentro.',
  },
  {
    quien: 'Las muestras británicas son pequeñas',
    cita: {
      fuenteId: 'dsit-2024',
      texto: citaDe('dsit-2024', 'should be treated with caution').texto,
    },
    implica:
      'Con 31 instituciones en 2024, comparar años no es fiable. La encuesta lo dice antes que nosotros.',
  },
  {
    quien: 'Un marco no es una lista de verificación',
    cita: {
      fuenteId: 'nist-csf',
      texto: citaDe('nist-csf', 'not a checklist of actions to perform').texto,
    },
    implica:
      'Implementar un marco no produce cumplimiento por sí mismo; las acciones varían por organización.',
  },
  {
    quien: 'El método importa, pero sin prometer demasiado',
    cita: {
      fuenteId: 'burgos-rojas-2024',
      texto: citaDe('burgos-rojas-2024', 'puede impactar de manera importante').texto,
    },
    implica:
      'La revisión sistemática habla de «puede impactar». Ese matiz es el que este ensayo conserva.',
  },
];

export type Marca = {
  id: 'ucv' | 'nist' | 'enisa' | 'unam' | 'uba';
  nombre: string;
  origen: string;
  licencia: string;
  nota: string;
};

export const marcas: Marca[] = [
  {
    id: 'ucv',
    nombre: 'Universidad César Vallejo',
    origen: 'SVG publicado por la propia universidad en su portal institucional',
    licencia: 'Marca de la institución; se reproduce con fines educativos y de identificación',
    nota: 'Se verificó a ojo que el archivo corresponde al logo real. Otro SVG servido en la misma ruta pertenece a Fundación Real Madrid y fue descartado.',
  },
  {
    id: 'nist',
    nombre: 'NIST',
    origen: 'Biblioteca de componentes oficial de nist.gov',
    licencia: 'Organismo federal de EE. UU.; dominio público',
    nota: 'Su uso no implica endoso del contenido de este ensayo.',
  },
  {
    id: 'enisa',
    nombre: 'ENISA',
    origen: 'Activo publicado en enisa.europa.eu',
    licencia: '© Unión Europea; uso editorial',
    nota: 'Reproduce el emblema con las estrellas de la UE tal cual lo publica la agencia.',
  },
  {
    id: 'unam',
    nombre: 'UNAM',
    origen: 'Wikimedia Commons, versión escalable del escudo',
    licencia: 'Dominio público',
    nota: 'Aparece solo en el caso documentado, como identificación del emisor del boletín.',
  },
  {
    id: 'uba',
    nombre: 'Universidad de Buenos Aires',
    origen: 'Wikimedia Commons, sello oficial vectorizado',
    licencia: 'Dominio público',
    nota: 'Igual que UNAM: identifica al emisor del comunicado citado.',
  },
];

/**
 * Marcas que deliberadamente NO se usan. Se consigna porque una marca de
 * certificación ajena en una página sobre auditoría se leería como una
 * acreditación que no existe.
 */
export const marcasNoUsadas = [
  {
    nombre: 'ISO',
    porque:
      'El logo de ISO es marca registrada y su uso está reservado. Se escribe «ISO/IEC 27001» en tipografía, como referencia normativa.',
  },
  {
    nombre: 'TÜV Rheinland',
    porque:
      'Es una marca de certificación: solo puede exhibirla la entidad certificada. Aquí TÜV es fuente citada, no acreditador.',
  },
  {
    nombre: 'GOV.UK / DSIT',
    porque:
      'El logotipo con la corona no es reutilizable. El contenido sí: Crown copyright bajo Open Government Licence. Se cita en texto.',
  },
  {
    nombre: 'Escudo Nacional del Perú',
    porque:
      'Regulado por la ley de símbolos patrios; usarlo decorativamente en un trabajo universitario es arriesgado. Se nombra al CNSD en texto.',
  },
];

/**
 * Personas que hablan en el ensayo, con su cargo y su institucion. Cada frase
 * esta copiada literalmente de la fuente indicada. No se incluyen retratos: no
 * existe ninguna fotografía de estas personas con licencia que permita
 * reproducirla, y una cara generada junto a una cita ajena sería fabricar
 * evidencia. La autoridad aqui la da el nombre, la institucion y el texto.
 */
export type Voz = {
  nombre: string;
  rol: string;
  institución: string;
  fuenteId: string;
  buscar: string;
  contexto: string;
};

export const voces: Voz[] = [
  {
    nombre: 'Federico Rodríguez',
    rol: 'Autor del informe',
    institución: 'Microsoft Latinoamérica',
    fuenteId: 'microsoft-2024',
    buscar: 'industria de industrias',
    contexto: 'Por qué una universidad acumula datos sensibles sin ser un banco ni un hospital.',
  },
  {
    nombre: 'R. Aquino Arcata',
    rol: 'Coautor',
    institución: 'Universidad Nacional Jorge Basadre Grohmann, Tacna',
    fuenteId: 'aquino-2023',
    buscar: 'plataforma informática de trabajo',
    contexto: 'Definió el objeto que este ensayo audita, en una universidad pública peruana.',
  },
  {
    nombre: 'M. A. Burgos-Rojas',
    rol: 'Coautor',
    institución: 'Universidad Nacional de Trujillo',
    fuenteId: 'burgos-rojas-2024',
    buscar: 'puede impactar de manera importante',
    contexto: 'Revisión sistemática con método declarado: qué cambia elegir un marco y no otro.',
  },
  {
    nombre: 'Joffre Vicente León Acurio',
    rol: 'Autor principal',
    institución: 'Universidad Técnica de Babahoyo, Ecuador',
    fuenteId: 'leon-acurio-2024',
    buscar: 'El objetivo principal del estudio',
    contexto: 'De aquí salen las cinco fases del ciclo que se recorre en el capítulo III.',
  },
  {
    nombre: 'Juan David Fernández',
    rol: 'AppSec Engineer',
    institución: 'Hackmetrix',
    fuenteId: 'hackmetrix-2025',
    buscar: 'no refleja la totalidad',
    contexto: 'El autor de un estudio propio declarando, antes que nadie, hasta dónde no llega.',
  },
];
