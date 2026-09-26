export type Cita = {
  texto: string;
  idioma: 'es' | 'en';
  sustenta: string;
  nota?: string;
};

export type TipoFuente = 'oficial' | 'norma' | 'academica' | 'institucional' | 'complementaria';

export type Fuente = {
  id: string;
  tipo: TipoFuente;
  org: string;
  autor?: string;
  titulo: string;
  medio?: string;
  fecha: string;
  url: string;
  /** Cómo se obtuvo el texto: en vivo, vía snapshot, etc. */
  acceso: 'en vivo' | 'snapshot';
  doi?: string;
  nota?: string;
  citas: Cita[];
};

/**
 * Cada cita está copiada textualmente del documento. `acceso: 'snapshot'`
 * significa que el sitio bloqueaba clientes automáticos y el texto se leyó en
 * una copia archivada; se consigna para que el lector pueda volver al mismo
 * punto. Ninguna cifra de este archivo carece de base muestral declarada.
 */
export const fuentes: Fuente[] = [
  {
    id: 'dsit-2026',
    tipo: 'oficial',
    org: 'Department for Science, Innovation and Technology (Reino Unido)',
    titulo: 'Cyber security breaches survey 2025/2026: education institutions findings',
    fecha: '2026-04-30',
    url: 'https://www.gov.uk/government/statistics/cyber-security-breaches-survey-20252026/cyber-security-breaches-survey-20252026-education-institutions-findings',
    acceso: 'en vivo',
    nota: 'Encuesta oficial británica. Es la fuente primaria que el sector citaba de oídas: el 43% que circulaba por internet provenía de aquí, no de Microsoft.',
    citas: [
      {
        texto:
          'Over seven in ten secondary schools (73%), nearly nine in ten further education colleges (88%) and almost every higher education institution (98%) had identified breaches or attacks in the last 12 months.',
        idioma: 'en',
        sustenta: 'Frecuencia real del incidente en educación superior.',
      },
      {
        texto:
          'Just over one in four (27%) further and higher education institutions reported experiencing a breach or attack at least weekly.',
        idioma: 'en',
        sustenta: 'El reemplazo honesto del antiguo «43% cada semana».',
      },
      {
        texto:
          'Among those identifying a breach, phishing was overwhelmingly the main threat to schools (90% of primary schools and 96% of secondary schools), colleges and universities (96% of further education and higher education institutions combined).',
        idioma: 'en',
        sustenta: 'Cuál es el vector dominante: phishing, no intrusión sofisticada.',
      },
      {
        texto:
          'Storage of personal data was a major vulnerability for many educational institutions. Over a quarter of further education colleges (27%) and almost half of higher education institutions (49%) said they held personal data on employees or students, which was not protected by techniques such as anonymisation or encryption.',
        idioma: 'en',
        sustenta: 'El dato más cercano a un sistema académico real: dato personal sin cifrar.',
      },
      {
        texto:
          'In the past 12 months, at least eight in ten educational institutions had taken one or more actions to identify cyber security risks. The figure ranged from 81% of primary schools to 100% of higher education institutions.',
        idioma: 'en',
        sustenta: 'Contrapeso: el sector también se mueve. Evita el tono catastrófico.',
      },
      {
        texto:
          'Almost three-quarters (74%) of primary schools had business continuity plans that covered cyber security, rising to 80% of secondary schools, 79% of further education colleges, and 86% of higher education institutions.',
        idioma: 'en',
        sustenta: 'Que existe continuidad de negocio planificada, medido.',
      },
    ],
  },
  {
    id: 'dsit-2024',
    tipo: 'oficial',
    org: 'Department for Science, Innovation and Technology (Reino Unido)',
    titulo: 'Cyber security breaches survey 2024: education institutions annex',
    fecha: '2024-04-09',
    url: 'https://www.gov.uk/government/statistics/cyber-security-breaches-survey-2024/cyber-security-breaches-survey-2024-education-institutions-annex',
    acceso: 'en vivo',
    nota: 'Aquí está el origen del número que la página anterior atribuía a Microsoft. Se conserva para poder auditar la cita, no para volver a usarla.',
    citas: [
      {
        texto:
          'Over two in five (43%) higher education institutions reported experiencing a breach or attack at least weekly.',
        idioma: 'en',
        sustenta: 'El 43% real, con su población correcta.',
        nota: 'Se imprime con su denominador: solo entre las que ya habían identificado un brecha, sobre 30 instituciones.',
      },
      {
        texto:
          'Among those that have experienced breaches or attacks in the last 12 months, higher education institutions were more likely to be affected than further education colleges and schools:',
        idioma: 'en',
        sustenta: 'La condición que la versión anterior omitía: el denominador.',
      },
      {
        texto:
          'Because of the small sample sizes for further education colleges (44 in 2023, 43 in 2024) and higher education institutions (52 in 2023, 31 in 2024), changes between years should be treated with caution, and should be viewed as indicative only.',
        idioma: 'en',
        sustenta: 'El límite de la propia encuesta, en sus palabras.',
      },
    ],
  },
  {
    id: 'microsoft-2024',
    tipo: 'institucional',
    org: 'Microsoft',
    autor: 'Federico Rodriguez',
    titulo:
      'Cyber Signals Edición 8 | Educación bajo asedio: Cómo los cibercriminales atacan nuestras escuelas',
    medio: 'Noticias de Microsoft LATAM',
    fecha: '2024-10-10',
    url: 'https://news.microsoft.com/source/latam/noticias-de-microsoft/cyber-signals-edicion-8-educacion-bajo-asedio-como-los-cibercriminales-atacan-nuestras-escuelas/',
    acceso: 'en vivo',
    nota: 'La URL que figuraba en la versión anterior estaba rota: decía «ciberdelincuentes» donde dice «cibercriminales».',
    citas: [
      {
        texto:
          'La educación es en esencia una «industria de industrias», ya que las instituciones de K-12 y educación superior gestionan datos que pueden incluir registros de salud, información financiera y otros datos regulados.',
        idioma: 'es',
        sustenta: 'Por qué una universidad gestiona dato sensible, sin necesidad de alarmar.',
      },
      {
        texto:
          'Según la Encuesta de Brechas de Ciberseguridad 2024 del Departamento de Ciencia, Innovación y Tecnología del Reino Unido, el 43% de las instituciones de educación superior del Reino Unido informaron haber experimentado una brecha o ciberataque al menos semanalmente.',
        idioma: 'es',
        sustenta: 'Que Microsoft no midió nada: cita la encuesta británica. Corrige la atribución.',
      },
      {
        texto:
          'La telemetría de Microsoft Defender para Office 365 muestra que diariamente se dirigen más de 15,000 mensajes con códigos QR maliciosos hacia el sector educativo, incluyendo ataques de phishing, spam y malware.',
        idioma: 'es',
        sustenta: 'Un vector concreto y verificable, sin dramatismo.',
      },
      {
        texto:
          'Según los datos de Microsoft Threat Intelligence, el sector educativo es el tercer más atacado, y los Estados Unidos registran la mayor actividad de ciberamenazas.',
        idioma: 'es',
        sustenta: 'Neutralidad: tercero, no primero.',
      },
      {
        texto:
          'Estudios han demostrado que una cuenta es más del 99.9% menos propensa a ser comprometida cuando utiliza autenticación multifactor.',
        idioma: 'es',
        sustenta: 'El control concreto con efecto medido.',
      },
    ],
  },
  {
    id: 'iso-27001',
    tipo: 'norma',
    org: 'ISO / IEC',
    titulo: 'ISO/IEC 27001:2022 — Information security management systems — Requirements',
    medio: 'Edición 3, 2022-10',
    fecha: '2022-10-01',
    url: 'https://www.iso.org/standard/27001.html',
    acceso: 'snapshot',
    nota: 'iso.org responde 403 a clientes automáticos; el texto se verificó en la copia archivada de la página oficial.',
    citas: [
      {
        texto:
          "ISO/IEC 27001 is the world's best-known standard for information security management systems (ISMS). It defines requirements an ISMS must meet.",
        idioma: 'en',
        sustenta: 'La definición normativa, en lugar de la de una certificadora.',
      },
      {
        texto:
          'Conformity with ISO/IEC 27001 means that an organization or business has put in place a system to manage risks related to the security of data owned or handled by the company, and that this system respects all the best practices and principles enshrined in this International Standard.',
        idioma: 'en',
        sustenta: 'Qué significa realmente «estar auditado»: un sistema de gestión de riesgos.',
      },
    ],
  },
  {
    id: 'iso-19011',
    tipo: 'norma',
    org: 'ISO',
    titulo: 'ISO 19011:2018 — Guidelines for auditing management systems',
    fecha: '2018-07-01',
    url: 'https://www.iso.org/standard/70017.html',
    acceso: 'snapshot',
    nota: 'Existe una norma dedicada a cómo se audita, separable de la certificación.',
    citas: [
      {
        texto:
          'ISO 19011 is an international standard that provides guidelines for auditing management systems, including quality management systems (ISO 9001) and environmental management systems (ISO 14001). It outlines the principles of auditing, managing audit programs, and conducting management system audits.',
        idioma: 'en',
        sustenta: 'Que el método no lo inventa una empresa: tiene su propia norma de guía.',
      },
    ],
  },
  {
    id: 'tuv-2024',
    tipo: 'complementaria',
    org: 'TÜV Rheinland',
    titulo: 'ISO 27001 Audit: Complete Guide',
    medio: 'Nota de prensa',
    fecha: '2024-08-22',
    url: 'https://www.tuv.com/press/en/press-releases/iso-27001-audit-complete-guide.html',
    acceso: 'en vivo',
    nota: 'Guía de una entidad certificadora redactada para empresas, no para universidades. Contiene artefactos de traducción automática: se citan solo frases limpias.',
    citas: [
      {
        texto:
          'An ISO 27001 audit involves a competent and objective auditor who will review the ISMS or elements thereof and test that the implemented system meets the requirements of the standard, the information requirements and objectives of the organization itself, and that the policies, processes, and other controls are effective and efficient.',
        idioma: 'en',
        sustenta: 'Qué hace un auditor, con precisión.',
      },
      {
        texto:
          'Clause 9.2 of the standard requires organizations to carry out internal audits at scheduled intervals to determine compliance with the requirements of the standard, and which need to be governed by a formal process.',
        idioma: 'en',
        sustenta: 'La base normativa de la periodicidad: intervalos programados.',
      },
      {
        texto:
          'The ISO 27001 audit is carried out based on another standard, ISO 19011, which establishes the best practices for internal and external audits, including all phases, such as planning, conducting, reporting, and assessing the competence of auditors.',
        idioma: 'en',
        sustenta: 'Las fases del ciclo, y que el método no es opinión.',
      },
      {
        texto:
          'Keep in mind that an ISO auditor follows a strict schedule. Due to time constraints, he only has enough time to audit one or two examples of each key process.',
        idioma: 'en',
        sustenta: 'El límite honesto de una auditoría. Va en la sección de límites.',
      },
    ],
  },
  {
    id: 'nist-csf',
    tipo: 'norma',
    org: 'NIST',
    titulo: 'The NIST Cybersecurity Framework (CSF) 2.0 — NIST CSWP 29',
    fecha: '2024-02-26',
    url: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
    acceso: 'en vivo',
    nota: 'PDF oficial descargado y verificado.',
    citas: [
      {
        texto:
          'The Cybersecurity Framework (CSF) 2.0 is designed to help organizations of all sizes and sectors — including industry, government, academia, and nonprofit — to manage and reduce their cybersecurity risks.',
        idioma: 'en',
        sustenta: 'Que el marco está pensado también para academia, sin importar la madurez.',
      },
      {
        texto:
          'PR.AA-01: Identities and credentials for authorized users, services, and hardware are managed by the organization.',
        idioma: 'en',
        sustenta: 'Que la identidad y sus credenciales son un objeto de gestión, no un detalle técnico.',
      },
      {
        texto:
          'PR.AA-05: Access permissions, entitlements, and authorizations are defined in a policy, managed, enforced, and reviewed, and incorporate the principles of least privilege and separation of duties.',
        idioma: 'en',
        sustenta: 'La formulación exacta de «revisar accesos y permisos».',
      },
      {
        texto:
          'GOVERN (GV) — The organization\u2019s cybersecurity risk management strategy, expectations, and policy are established, communicated, and monitored.',
        idioma: 'en',
        sustenta: 'Gobernanza: quién responde, sin lenguaje de emergencia.',
      },
      {
        texto:
          'These outcomes are not a checklist of actions to perform; specific actions taken to achieve an outcome will vary by organization and use case',
        idioma: 'en',
        sustenta: 'Que el propio marco rechaza la lectura de lista de verificación.',
      },
    ],
  },
  {
    id: 'enisa-2026',
    tipo: 'oficial',
    org: 'ENISA — Agencia de la Unión Europea para la Ciberseguridad',
    titulo: 'ENISA Threat Landscape 2026',
    fecha: '2026-09-22',
    url: 'https://www.enisa.europa.eu/publications/enisa-threat-landscape-2026',
    acceso: 'en vivo',
    nota: 'Informe de 101 páginas. La educación no es un capítulo sectorial propio en esta edición: aparece entre varios sectores.',
    citas: [
      {
        texto:
          'Social engineering remained a common enabling tactic to abuse trust, particularly through phishing campaigns (77.8%), increasingly supported by phishing kits and service-based ecosystems.',
        idioma: 'en',
        sustenta: 'El vector dominante, medido por una agencia pública.',
      },
      {
        texto:
          "Roma Tre University's IT infrastructure was targeted by a significant ransomware attack claimed by the INC group, which led to an interruption of the university's digital services.",
        idioma: 'en',
        sustenta: 'Un caso universitario real documentado por una agencia, no por un blog.',
      },
      {
        texto:
          'The attack had a widespread impact, rendering websites, student portals and educational platforms (Moodle) inaccessible, while also disrupting essential administrative functions such as accounting, personnel management and internal communication tools.',
        idioma: 'en',
        sustenta: 'El efecto concreto sobre portales de alumnos, que antes la página afirmaba sin fuente.',
        nota: 'Extraído de una tabla de dos columnas; el mes del episodio no es atribuible con certeza desde la extracción.',
      },
    ],
  },
  {
    id: 'leon-acurio-2024',
    tipo: 'academica',
    org: 'Universidad Técnica de Babahoyo (Ecuador)',
    autor: 'Joffre Vicente León Acurio, Ángel Rafael España León, Raúl Armando Ramos Morocho, Harry Adolfo Saltos Viteri',
    titulo:
      'Evaluación de los controles de seguridad a través de auditorías informáticas: Desafíos en la era moderna',
    medio: 'Pro Sciences: Revista de Producción, Ciencias e Investigación, 8(54), 79–90',
    fecha: '2024-09-30',
    url: 'https://journalprosciences.com/index.php/ps/article/view/751',
    acceso: 'snapshot',
    nota: 'Artículo de revisión, licencia CC BY-NC 4.0. El DOI impreso por la revista no está registrado en Crossref, por lo que no se enlaza. La cita anterior lo nombraba «Acurio et al.», que recorta el apellido compuesto.',
    citas: [
      {
        texto:
          'La auditoría informática comprende un componente importante dentro de la evaluación, control y seguridad de programas, aplicaciones y tecnología que permiten a las instituciones llevar a cabo de manera eficaz y eficiente sus operaciones.',
        idioma: 'es',
        sustenta: 'Definición operativa de auditoría informática.',
        nota: 'Citado dentro del artículo a su vez a Robalino et al. (2022): fuente secundaria.',
      },
      {
        texto:
          'El objetivo principal del estudio es reconocer la eficacia de los controles de seguridad actuales y proponer estrategias basadas en estándares internacionales como ISO/IEC 27001, ITIL y COBIT.',
        idioma: 'es',
        sustenta: 'Que el objeto de estudio coincide con el de este ensayo.',
      },
      {
        texto:
          'Inicio, en esta etapa se inicia con una entrevista para recopilar información detallada sobre los recursos a auditar y estimar los requisitos necesarios.',
        idioma: 'es',
        sustenta: 'Fase 1 del ciclo de auditoría.',
        nota: 'Extraído del PDF; los saltos de línea del original pueden variar.',
      },
      {
        texto:
          'Fase de planificación, se establecen las actividades, objetivos, métodos y presupuestos para la auditoría.',
        idioma: 'es',
        sustenta: 'Fase 2 del ciclo.',
      },
      {
        texto:
          'Fase de ejecución, se desarrollan las tareas planificadas según los lineamientos definidos.',
        idioma: 'es',
        sustenta: 'Fase 3 del ciclo.',
      },
      {
        texto:
          'Fase final, se organiza y documenta el trabajo realizado, asegurando su utilidad para aclaraciones futuras y seguimiento de desviaciones detectadas.',
        idioma: 'es',
        sustenta: 'Fase 5 del ciclo: documentar.',
      },
      {
        texto:
          'Sin embargo, persisten brechas en la adopción de estándares y normas internacionales, así como desafíos asociados con la resistencia al cambio y la dependencia tecnológica.',
        idioma: 'es',
        sustenta: 'El hallazgo matizado, que contrarresta el «el método funciona siempre».',
      },
    ],
  },
  {
    id: 'aquino-2023',
    tipo: 'academica',
    org: 'Universidad Nacional Jorge Basadre Grohmann (Tacna, Perú)',
    autor: 'R. Aquino Arcata, G. A. Villarroel Laura, R. Cuevas Machaca',
    titulo:
      'El modelo COBIT 5 para Auditoría Informática de los Sistemas de Información Académica de la Universidad Nacional Jorge Basadre Grohmann',
    medio: 'Innovación y Software, 4(1), 63–81 · Redalyc · CC BY 4.0',
    fecha: '2023-03-30',
    url: 'https://www.redalyc.org/journal/6738/673874721005/html/',
    acceso: 'en vivo',
    nota: 'Es el antecedente más directo de este ensayo: auditar un sistema de información académica, en una universidad pública peruana.',
    citas: [
      {
        texto:
          'El SIA es el Sistema de Información Académica que proporciona una plataforma informática de trabajo para la interacción de usuarios y equipo computacional que facilita la captura, almacenamiento, procesamiento, acceso y salida de información confiable y actualizada sobre programas, proyectos y actividades académicas.',
        idioma: 'es',
        sustenta: 'La definición del objeto que este ensayo audita, que la versión anterior nunca definía.',
      },
      {
        texto:
          'La Auditoría Informática es un proceso llevado a cabo por profesionales especialmente capacitados para el efecto, y que consiste en recoger, agrupar y evaluar evidencias para determinar si un Sistema de Información salvaguarda el activo empresarial, mantiene la integridad de los datos',
        idioma: 'es',
        sustenta: 'Auditoría como evaluación de evidencias, no como búsqueda de culpables.',
        nota: 'La frase continua en el original con un error gramatical; se corta antes de él.',
      },
      {
        texto:
          'El marco de trabajo COBIT 5, es una guía a seguir para evaluar el desempeño en la gestión de las tecnologías de la información, tanto en organizaciones públicas como privadas.',
        idioma: 'es',
        sustenta: 'Que existe un marco aplicable a una universidad pública.',
      },
    ],
  },
  {
    id: 'burgos-rojas-2024',
    tipo: 'academica',
    org: 'Universidad Nacional de Trujillo (Perú)',
    autor: 'M. A. Burgos-Rojas, C. I. Haro-Polo, A. C. Mendoza-de los Santos',
    titulo:
      'Impacto del uso de diversos marcos de seguridad en las auditorías informáticas dentro de las organizaciones: Revisión sistemática',
    medio: 'Revista Científica de la UCSA, 11(2) · SciELO · DOI registrado',
    fecha: '2024-04-01',
    url: 'https://scielo.iics.una.py/scielo.php?script=sci_arttext&pid=S2409-87522024000200103&lng=es&nrm=iso&tlng=es',
    acceso: 'en vivo',
    doi: 'https://doi.org/10.18004/ucsa/2409-8752/2024.011.02.0103',
    nota: 'Revisión sistemática con método declarado y autoría peruana. Es el respaldo académico arbitrado que la versión anterior no tenía.',
    citas: [
      {
        texto:
          'En un mundo donde los ataques a la seguridad de la información en las organizaciones se han incrementado, surge la auditoría informática como una solución para prevenir estos sucesos no deseados. No obstante, para asegurar la efectividad de estas auditorías, es imprescindible el uso de un marco de seguridad adecuado.',
        idioma: 'es',
        sustenta: 'Que el marco importa, no solo la intención de auditar.',
      },
      {
        texto:
          'Se llevó a cabo una revisión sistemática que comprende artículos originales, publicados en inglés y español desde 2018 hasta 2023, y accesibles en bases de datos reconocidas como Sciencedirect, Springerlink, JSTOR, Dialnet, Scielo, Scopus y Latinindex.',
        idioma: 'es',
        sustenta: 'El método de la revisión, explícito.',
      },
      {
        texto:
          'Adicionalmente, se ha encontrado que la selección del marco de seguridad puede impactar de manera importante en la habilidad de una organización para detectar y minimizar los riesgos de seguridad, mantener la conformidad con las regulaciones y asegurar la integridad y confidencialidad de los datos.',
        idioma: 'es',
        sustenta: 'El efecto, dicho con la cautela del original: «puede impactar».',
      },
    ],
  },
  {
    id: 'rd-311-2022',
    tipo: 'oficial',
    org: 'Boletín Oficial del Estado (España)',
    titulo: 'Real Decreto 311/2022, Esquema Nacional de Seguridad — artículo 31, Auditoría de la seguridad',
    fecha: '2022-04-27',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191',
    acceso: 'en vivo',
    nota: 'El texto no menciona la palabra «universidad»: aplica a todo el sector público, y las universidades públicas entran por esa vía. Se consigna para no exceder lo que la norma dice.',
    citas: [
      {
        texto:
          'Los sistemas de información comprendidos en el ámbito de aplicación de este real decreto serán objeto de una auditoría regular ordinaria, al menos cada dos años, que verifique el cumplimiento de los requerimientos del ENS.',
        idioma: 'es',
        sustenta: 'El precedente legal real de la periodicidad: dos años, no uno.',
      },
      {
        texto:
          'Con carácter extraordinario, deberá realizarse dicha auditoría siempre que se produzcan modificaciones sustanciales en los sistemas de información, que puedan repercutir en las medidas de seguridad requeridas.',
        idioma: 'es',
        sustenta: 'Que la cadencia no es solo calendárica: también reactiva.',
      },
      {
        texto:
          'El informe de auditoría deberá dictaminar sobre el grado de cumplimiento de este real decreto identificando los hallazgos de cumplimiento e incumplimiento detectados.',
        idioma: 'es',
        sustenta: 'Que el producto de la auditoría es un dictamen con hallazgos.',
      },
    ],
  },
  {
    id: 'ncsc-10steps',
    tipo: 'oficial',
    org: 'National Cyber Security Centre (Reino Unido)',
    titulo: '10 Steps to Cyber Security',
    fecha: '2026-09-25',
    url: 'https://www.ncsc.gov.uk/collection/10-steps-to-cyber-security',
    acceso: 'en vivo',
    nota: 'Fecha indicada como «vigente»; es una guía viva, no una publicación fechada.',
    citas: [
      {
        texto:
          'Cyber security is central to the health and resilience of any organisation reliant on digital technology to function, and this places it firmly within the responsibility of the Board.',
        idioma: 'en',
        sustenta: 'Gobernanza sin lenguaje de emergencia: es responsabilidad del órgano directivo.',
      },
    ],
  },
  {
    id: 'cnsd-peru',
    tipo: 'oficial',
    org: 'Centro Nacional de Seguridad Digital — Presidencia del Consejo de Ministros (Perú)',
    titulo: 'Centro Nacional de Seguridad Digital',
    fecha: '2026-09-25',
    url: 'https://www.gob.pe/cnsd',
    acceso: 'en vivo',
    nota: 'Página institucional vigente. Convierte el «no hace falta comprar servidores nuevos» en algo verificable.',
    citas: [
      {
        texto:
          'Como componente integrante de la seguridad nacional, el Centro Nacional de Seguridad Digital gestiona, dirige, articula y supervisa la operación, educación, promoción, colaboración y cooperación de la seguridad digital en el país, a fin de fortalecer la confianza digital.',
        idioma: 'es',
        sustenta: 'Que existe capacidad pública nacional en la materia.',
      },
    ],
  },
  {
    id: 'hackmetrix-2025',
    tipo: 'complementaria',
    org: 'Hackmetrix',
    autor: 'Juan David Fernández (AppSec Engineer); estudio firmado por Adriel Araujo',
    titulo: 'El impacto de los ciberataques en universidades de Latinoamérica',
    medio: 'Blog de empresa',
    fecha: '2025-08-15',
    url: 'https://blog.hackmetrix.com/ciberataques-en-universidades-de-latinoamerica',
    acceso: 'en vivo',
    nota: 'Estudio propio de reconocimiento pasivo sobre 779 subdominios de 17 instituciones, actualizado el 2026-04-23. No es revista arbitrada ni organismo público, y su lista de incidentes no enlaza ninguna fuente primaria: por eso figura como complementaria y no como evidencia de incidente.',
    citas: [
      {
        texto:
          'Archivos phpinfo Accesibles Públicamente (PHP Info): El hallazgo más común identificado en el estudio, es la presencia de archivos phpinfo accesibles públicamente, con un asombroso número de 540 incidencias.',
        idioma: 'es',
        sustenta: 'Un hallazgo real y reproducible, con número propio.',
      },
      {
        texto:
          'Un hallazgo particularmente alarmante es la exposición de archivos de configuración de Git en 128 ocasiones. De los cuales, 25 tenían la capacidad de directory listing en el directorio “.git” y 7 de ellos contenían credenciales en el archivo “config”.',
        idioma: 'es',
        sustenta: 'Reemplaza el «07 roles sin revisar» inventado por un número real con fuente.',
      },
      {
        texto:
          'Factores como presupuestos limitados —donde la inversión suele concentrarse en infraestructura física—, la falta de una cultura organizacional que promueva la seguridad como responsabilidad institucional y la escasa realización de pruebas de penetración periódicas, contribuyen a una exposición innecesaria frente a amenazas digitales.',
        idioma: 'es',
        sustenta: 'La explicación estructural, en tono explicativo y no catastrófico.',
      },
      {
        texto:
          'Este estudio no refleja la totalidad de las debilidades de las instituciones analizadas. Se limita únicamente al reconocimiento pasivo y la identificación de información pública o fácilmente accesible.',
        idioma: 'es',
        sustenta: 'El límite que la propia fuente declara. Modelo de redacción neutral.',
      },
    ],
  },
  {
    id: 'uba-2023',
    tipo: 'institucional',
    org: 'Universidad de Buenos Aires',
    titulo: 'Comunicado sobre el incidente de ransomware de diciembre de 2023',
    fecha: '2023-12-19',
    url: 'https://www.clarin.com/tecnologia/uba-sufrio-ciberataque-docentes-alumnos-pueden-acceder-sistemas_0_hSLyvy1RGy.html',
    acceso: 'snapshot',
    nota: 'El comunicado se reproduce íntegro en la nota de prensa y en su espejo universitario; el cuerpo de Clarín se renderiza por JavaScript.',
    citas: [
      {
        texto:
          'Se ha detectado la intromisión de un virus conocido como Ransomware. Se trata de un malware bastante habitual en este tipo de situaciones que encripta información de los dispositivos e impide el acceso a los mismos.',
        idioma: 'es',
        sustenta: 'Que la institución confirmó el tipo de incidente con sus propias palabras.',
      },
      {
        texto:
          'Las acciones correctivas para el restablecimiento a un 100% de normalidad de los servicios previos al incidente podrían demorar trabajos intensivos que se extiendan durante algunas semanas.',
        idioma: 'es',
        sustenta: 'La duración real, en boca de la UBA. Reemplaza el «paralizó todo por semanas».',
      },
      {
        texto:
          'Las inscripciones a materias y actividades se irán restableciendo por facultad restableciendo un nuevo cronograma respecto a los afectados.',
        idioma: 'es',
        sustenta: 'Que hubo continuidad con cronograma alternativo, no colapso total.',
      },
    ],
  },
  {
    id: 'unam-2026',
    tipo: 'institucional',
    org: 'UNAM — Dirección General de Cómputo y de Tecnologías de Información y Comunicación',
    titulo: 'Boletín UNAM-DGCS-011',
    fecha: '2026-01-07',
    url: 'https://www.dgcs.unam.mx/boletin/bdboletin/2026_011.html',
    acceso: 'en vivo',
    nota: 'Sustituye el caso «UNAM 2024, phishing dirigido a credenciales», que no pudo verificarse en ninguna fuente primaria. Además es un modelo de cómo se informa sin alarmar: confirma, acota y niega.',
    citas: [
      {
        texto:
          'La Dirección General de Cómputo y de Tecnologías de Información y Comunicación (DGTIC) de la UNAM informa que durante el periodo vacacional fue detectada una intrusión no autorizada (hackeo) en cinco de los más de cien mil sistemas informáticos universitarios.',
        idioma: 'es',
        sustenta: 'Un caso latinoamericano actual con fuente oficial y proporción declarada.',
      },
      {
        texto:
          'Tras un primer análisis técnico se confirmó que no hay indicios de extracción de información de los sistemas de datos personales del alumnado o del personal académico y administrativo, los cuales permanecen seguros, bajo los esquemas de protección institucional.',
        idioma: 'es',
        sustenta: 'Que se puede reportar un incidente sin catastrofismo.',
      },
      {
        texto:
          'La Universidad, de manera preventiva, activó de inmediato los protocolos institucionales de atención a incidentes de seguridad informática, que incluyó la inhabilitación de los sistemas correspondientes.',
        idioma: 'es',
        sustenta: 'Que existe un protocolo de respuesta y se activa.',
      },
    ],
  },
];

export const fuentesPorId = new Map(fuentes.map((f) => [f.id, f]));

export function citaDe(fuenteId: string, buscar: string): Cita {
  const f = fuentesPorId.get(fuenteId);
  const c = f?.citas.find((x) => x.texto.includes(buscar));
  if (!f || !c) throw new Error(`Cita no encontrada: ${fuenteId} :: ${buscar}`);
  return c;
}
