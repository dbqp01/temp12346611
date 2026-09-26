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

export type Correccion = {
  antes: string;
  problema: 'inventado' | 'no verificable' | 'mal atribuido' | 'exagerado' | 'roto';
  ahora: string;
};

/** Registro de verificación: qué se cayó del sitio y por qué. */
export const correcciones: Correccion[] = [
  {
    antes: '«Accesos · 07 · roles sin revisar»',
    problema: 'inventado',
    ahora:
      'Ese 7 no aparecía en ninguna de las cuatro fuentes citadas. Entra el dato real con dueño: 128 exposiciones de configuración de Git, 7 de ellas con credenciales en el archivo config (Hackmetrix, 2025).',
  },
  {
    antes: '«Microsoft (2024) midió que el 43% de las universidades británicas reportaba brechas cada semana»',
    problema: 'mal atribuido',
    ahora:
      'Tres errores: Microsoft no midió nada, cita una encuesta oficial; la población son instituciones de educación superior de Reino Unido; y el 43% es solo entre las que ya habían identificado un brecha, sobre 30 instituciones con margen ±8–14 pp. Se cita a DSIT como primario y se usa el 27% de 2025/26.',
  },
  {
    antes: '«En 2024, la UNAM sufrió phishing dirigido a credenciales»',
    problema: 'no verificable',
    ahora:
      'No se encontró ni una nota de prensa, boletín oficial ni reporte que lo documente. Su único origen es una lista de un blog de empresa sin enlace. Sale del sitio y entra el boletín oficial de enero 2026.',
  },
  {
    antes: '«La UBA sufrió un ransomware que paralizó inscripciones y notas por semanas»',
    problema: 'exagerado',
    ahora:
      'El incidente y el tipo de malware son ciertos y confirmados por la propia universidad. «Paralizó por semanas» no: hubo cronograma alternativo por facultad y lo que se prolongó fue el restablecimiento completo.',
  },
  {
    antes: '«…probar vulnerabilidades…, como pide ISO 27001»',
    problema: 'mal atribuido',
    ahora:
      'Una auditoría ISO 27001 no es una prueba de vulnerabilidades: revisa documentación y procesos y muestrea. Se separan los dos instrumentos y cada uno se cita con su fuente.',
  },
  {
    antes: '«Las universidades deberían auditar cada año y hacerlo obligatorio»',
    problema: 'exagerado',
    ahora:
      'Ninguna de las fuentes respalda el «cada año». El precedente legal real exige al menos cada dos años. La tesis se reformula: una política anual es más exigente que ese mínimo, no una ocurrencia.',
  },
  {
    antes: 'URL de Microsoft con el slug «ciberdelincuentes»',
    problema: 'roto',
    ahora:
      'Devolvía 404. El slug oficial dice «cibercriminales». Corregida y verificada en vivo: las cinco citas textualmente están en la página.',
  },
  {
    antes: '«Acurio et al.»',
    problema: 'mal atribuido',
    ahora:
      'El apellido compuesto es León Acurio. Además el título estaba recortado y el DOI impreso por la revista no está registrado en Crossref, así que no se enlaza.',
  },
  {
    antes: '«STATUS: EXPOSED» sobre el sistema de la UCV',
    problema: 'inventado',
    ahora:
      'Atribuir un estado de seguridad a una institución concreta sin haberlo medido es la afirmación más grave del sitio anterior. Sale: el diagrama ahora representa el método, con su nota de que no es telemetría.',
  },
  {
    antes: '«Nota de campo / lectura 01»',
    problema: 'inventado',
    ahora:
      'No hay trabajo de campo en este ensayo. La etiqueta se retira: lo que es observación personal del autor se dice como observación personal.',
  },
  {
    antes: '«Escuela Profesional de Ingeniería de Sistemas»',
    problema: 'no verificable',
    ahora:
      'El sitio oficial de la universidad usa «Escuela de Ingeniería de Sistemas» bajo la Facultad de Ingeniería y Arquitectura. Se corrige a la forma oficial.',
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
