import { StatisticItem, EjeThematico, RecursoEducativo, Actividad, Founder } from '../types';

export const OFFICIAL_LOGO_URL = '/assets/aistudio/Disen_o_sin_ti_tulo-2_79036a31.jpg';
export const DISTRITO_1501_LOGO_URL = '/LOGO1501.png';
export const IPMHU_LOGO_URL = '/IPMHULOGO.png';
export const HERO_IMAGE_URL = '/src/assets/images/hero_youth_dominican_1794421317828.jpg';
export const ROBELIN_IMAGE_URL = '/src/assets/images/robelin_student_lead_1794421318622.jpg';
export const JENNYFER_IMAGE_URL = '/src/assets/images/jennyfer_student_lead_1794421319552.jpg';
export const WORKSHOP_IMAGE_URL = '/src/assets/images/workshop_discussion_1794421319252.jpg';

export const ADMIN_SECRET_CODE = '190609';

export const ROTATING_STATISTICS: StatisticItem[] = [
  {
    id: 'stat-embarazo',
    categoryTag: 'UNA REALIDAD QUE DEBEMOS CONOCER',
    number: '16,481',
    title: 'Embarazos adolescentes',
    highlightText: 'embarazos en adolescentes se registraron en República Dominicana durante 2025.',
    fullDescription: 'Detrás de cada cifra hay una historia y una realidad que merece atención.',
    source: 'Fuente: ONE / CONANI · 2025.',
    contextPill: 'Salud Sexual y Reproductiva'
  },
  {
    id: 'stat-acoso',
    categoryTag: 'UNA REALIDAD QUE DEBEMOS CONOCER',
    number: '27 %',
    title: 'Acoso escolar',
    highlightText: 'de los estudiantes dominicanos participantes en PISA 2025',
    fullDescription: 'reportó sufrir alguna forma de acoso escolar varias veces al mes o más.',
    source: 'Fuente: OCDE · PISA 2025.',
    contextPill: 'Convivencia y Cultura de Paz'
  },
  {
    id: 'stat-salud-mental',
    categoryTag: 'UNA REALIDAD QUE DEBEMOS CONOCER',
    number: '37.6 %',
    title: 'Salud mental',
    highlightText: 'de los intentos de suicidio registrados en el país durante 2024',
    fullDescription: 'correspondió a adolescentes de entre 10 y 19 años.',
    source: 'Fuente: Ministerio de Salud Pública · SINAVE, 2024.',
    contextPill: 'Bienestar y Prevención'
  },
  {
    id: 'stat-vapeo',
    categoryTag: 'UNA REALIDAD QUE DEBEMOS CONOCER',
    number: '27.3 %',
    title: 'Consumo de vapeadores',
    highlightText: 'fue el promedio de estudiantes que reportaron uso diario de vapeadores',
    fullDescription: 'en una investigación realizada en centros educativos de las regionales 01 y 10.',
    source: 'Estudio exploratorio CND e IDEICE · 2025. Muestra regional, no nacional.',
    contextPill: 'Prevención de Adicciones'
  }
];

export const FOUNDERS_DATA: Founder[] = [
  {
    name: 'Robelin Mejias',
    role: 'Co-fundador y Coordinador de Transformación Digital y Comunicación',
    school: 'Instituto Politécnico Max Henríquez Ureña (IPMHU)',
    districtRole: 'Líder Estudiantil · Consejo Estudiantil Distrital 15 - 01',
    bio: 'Impulsor de la modernización institucional y la transformación digital estudiantil. Ha liderado el desarrollo del Campus Virtual, el portal de admisiones y la formalización de equipos operativos de IT y Protocolo. Con la popularidad de ser la imagen del Instituto Politécnico Max Henríquez Ureña y una destacada trayectoria en oratoria, comunicación social, gestión pública juvenil y producción de televisión (entrenado por el reconocido Productor de Televisión Lic. Anthony Montero), Robelin promueve en Generación Consciente un liderazgo de servicio basado en la excelencia, la empatía y la formación de carácter para los estudiantes del Distrito 15 - 01.',
    quote: '"Construir una comunidad donde cada estudiante descubra su potencial latente, desarrolle una voz con propósito y lidere transformaciones reales en su entorno académico y social."',
    vision: 'Construir una comunidad donde cada estudiante descubra su potencial latente, desarrolle una voz con propósito y lidere transformaciones reales en su entorno académico y social frente a las problemáticas que desafían a nuestra juventud.',
    achievements: [
      'Lideró el Rebranding Total y la reestructuración de imagen institucional juvenil en el IPMHU.',
      'Fundó e impulsó el Club de Comunicación Social y Periodismo escolar.',
      'Co-creador del Campus Virtual y plataformas digitales de orientación estudiantil.',
      'Productor de Televisión, entrenado por el Lic. Anthony Montero.',
      'Co-fundador de Generación Consciente y articulador de la red de enlaces juveniles del Distrito Educativo 15 - 01.'
    ],
    photos: [
      {
        id: 'rob-1',
        label: 'Fotografía Oficial 1',
        fileName: 'ROBELIN1.jpg',
        caption: 'Robelin Mejias - Imagen y Liderazgo Institucional IPMHU',
        defaultImage: '/ROBELIN1.jpg'
      },
      {
        id: 'rob-2',
        label: 'Fotografía Oficial 2',
        fileName: 'ROBELIN2.jpg',
        caption: 'Oratoria y Comunicación Social Juvenil',
        defaultImage: '/ROBELIN2.jpg'
      },
      {
        id: 'rob-3',
        label: 'Fotografía Oficial 3',
        fileName: 'ROBELIN3.jpg',
        caption: 'Gestión Pública y Enlace con el Distrito 15-01',
        defaultImage: '/ROBELIN3.jpg'
      }
    ]
  },
  {
    name: 'Jennyfer Lopez',
    role: 'Co-fundadora y Directora Ejecutiva de Formación y Salud Mental',
    school: 'Instituto Politécnico Max Henríquez Ureña (IPMHU)',
    districtRole: 'Directora General · Consejo Estudiantil Distrital 15 - 01',
    bio: 'Líder estudiantil destacada por su dominio del inglés, extraordinaria capacidad organizativa, alta empatía y profunda dedicación hacia el desarrollo del talento y el bienestar integral de la juventud. En el Instituto Politécnico Max Henríquez Ureña ha coordinado la integración de iniciativas extracurriculares formativas y clubes estratégicos como el Club de Baile, impulsando alianzas determinantes con los departamentos de orientación y psicología escolar. En Generación Consciente, Jennyfer articula los talleres de salud mental, la prevención del embarazo adolescente y la creación de redes de contención y escucha activa para los centros del Distrito 15 - 01.',
    quote: '"Empoderar a la juventud a través de la disciplina, el arte, la orientación integral, la empatía y la construcción colectiva de valores que perduren toda la vida."',
    vision: 'Empoderar a la juventud a través de la disciplina, el arte, la orientación integral y la construcción colectiva de valores que perduren toda la vida.',
    achievements: [
      'Co-artífice de la reestructuración formativa 2025-2026 de liderazgo juvenil en el IPMHU.',
      'Diseño del organigrama directivo y operativo para iniciativas estudiantiles.',
      'Supervisión y mentoría directa a los líderes de clubes y comités especializados.',
      'Impulso de alianzas estratégicas con los departamentos de Orientación y Psicología del centro y del Distrito 15-01.',
      'Co-fundadora de Generación Consciente y facilitadora de círculos de diálogo reflexivo y prevención.'
    ],
    photos: [
      {
        id: 'jen-1',
        label: 'Fotografía Oficial 1',
        fileName: 'JENNYFER1.jpg',
        caption: 'Jennyfer Lopez - Liderazgo Estudiantil en el IPMHU',
        defaultImage: '/JENNYFER1.jpg'
      },
      {
        id: 'jen-2',
        label: 'Fotografía Oficial 2',
        fileName: 'JENNYFER2.jpg',
        caption: 'Dirección ejecutiva y coordinación de dinámicas juveniles',
        defaultImage: '/JENNYFER2.jpg'
      },
      {
        id: 'jen-3',
        label: 'Fotografía Oficial 3',
        fileName: 'JENNYFER3.jpg',
        caption: 'Sesión de orientación y bienestar socioemocional entre pares',
        defaultImage: '/JENNYFER3.jpg'
      }
    ]
  }
];

export const EJES_TEMATICOS: EjeThematico[] = [
  {
    id: 'vapeo-sustancias',
    title: 'Consumo de Vapeadores y Sustancias',
    subtitle: 'Mitos, riesgos pulmonares y la presión social en las aulas',
    summary: 'Desmontando la falsa idea de inocuidad de los cigarrillos electrónicos y sustancias psicoactivas mediante evidencia científica.',
    description: 'El uso de vapeadores se ha extendido rápidamente en los centros educativos bajo la premisa errónea de que son vapor inofensivo. Analizamos su composición química (nicotina líquida, metales pesados, acetato de vitamina E, saborizantes tóxicos) y los graves efectos neurológicos en cerebros aún en desarrollo.',
    color: '#16899A',
    keyStats: '27.3% de estudiantes en centros estudiados reportaron uso diario (CND/IDEICE 2025).',
    mythsAndFacts: [
      {
        myth: '"El vapeador es solo vapor de agua con sabor dulce."',
        reality: 'Es un aerosol que contiene nicotina concentrada, propilenglicol, formaldehído y partículas microscópicas de metales pesados como níquel y plomo.'
      },
      {
        myth: '"Fumar vapeo no causa adicción como el cigarro tradicional."',
        reality: 'Un solo dispositivo desechable ("pod") puede contener la misma cantidad de nicotina que un paquete entero de cigarrillos, generando dependencia severa en pocas semanas.'
      },
      {
        myth: '"Lo puedo dejar en cualquier momento."',
        reality: 'El síndrome de abstinencia produce ansiedad aguda, irritabilidad, insomnio y desconcentración escolar.'
      }
    ],
    warningSigns: [
      'Disminución repentina del rendimiento académico y falta de concentración.',
      'Olor químico dulzón o frutal persistente en ropa o mochilas sin explicación.',
      'Ansiedad marcada al permanecer periodos prolongados sin salir al baño o al recreo.',
      'Tos seca frecuente, carraspera o falta de aire al realizar educación física.'
    ],
    actionSteps: [
      'Aprende a decir "No" con firmeza sin sentir que pierdes aceptación.',
      'Si un amigo consume, no lo juzgues: acompáñalo al departamento de orientación escolar.',
      'Reporta de forma anónima puntos de venta ilegal cerca del perímetro escolar.'
    ],
    targetAudience: 'Estudiantes de Secundaria y Ciclo Básico'
  },
  {
    id: 'salud-mental',
    title: 'Salud Mental y Bienestar Emocional',
    subtitle: 'Validar emociones, romper el silencio y prevenir el suicidio',
    summary: 'Espacios seguros de escucha, detección oportuna de depresión y ansiedad, y fomento de redes de apoyo entre pares.',
    description: 'La salud mental adolescente es tan vital como la física. Reconocemos la carga del estrés escolar, las expectativas familiares y el impacto de las redes sociales. Brindamos herramientas prácticas de gestión emocional y rutas de ayuda inmediata confidencial.',
    color: '#123B50',
    keyStats: '37.6% de los intentos de suicidio en el país (2024) involucraron a jóvenes de 10 a 19 años (SINAVE).',
    mythsAndFacts: [
      {
        myth: '"Hablar sobre suicidio o depresión incita a que la persona lo haga."',
        reality: 'Hablar de manera empática y abierta alivia la angustia, rompe el aislamiento y abre la puerta a recibir ayuda profesional.'
      },
      {
        myth: '"Los adolescentes solo buscan llamar la atención."',
        reality: 'Toda manifestación de dolor o deseo de desaparecer es una señal de auxilio legítima que jamás debe subestimarse.'
      },
      {
        myth: '"Estar triste es lo mismo que tener depresión."',
        reality: 'La tristeza es pasajera; la depresión es una condición clínica tratable que afecta el sueño, el apetito y la capacidad de disfrutar.'
      }
    ],
    warningSigns: [
      'Aislamiento de amigos y familiares; abandono de pasatiempos favoritos.',
      'Frases como "ya no sirvo para nada", "estarían mejor sin mí" o desinterés total por el futuro.',
      'Cambios drásticos de humor, insomnio prolongado o dormir en exceso.',
      'Regalar pertenencias personales queridas o despedidas inusuales.'
    ],
    actionSteps: [
      'Practica la escucha activa: valida el sentimiento del compañero sin minimizarlo con frases como "échale ganas".',
      'Contacta de inmediato a la Unidad de Orientación y Psicología de tu centro.',
      'Llama a la Línea de la Vida (809-200-1400) o al 9-1-1 en caso de emergencia inmediata.'
    ],
    targetAudience: 'Toda la comunidad educativa: estudiantes, docentes y familias'
  },
  {
    id: 'embarazo-adolescente',
    title: 'Embarazo Adolescente y Educación Sexual',
    subtitle: 'Proyecto de vida, consentimiento y decisiones informadas',
    summary: 'Orientación científica, libre de prejuicios, orientada al cuidado del cuerpo, relaciones sanas y postergación de la maternidad/paternidad precoz.',
    description: 'El embarazo temprano trunca proyectos formativos y perpetúa ciclos de vulnerabilidad económica. Fomentamos la comprensión del proyecto de vida personal, el autoconocimiento, la asertividad para fijar límites claros y el acceso a información preventiva veraz.',
    color: '#F2B84B',
    keyStats: '16,481 embarazos adolescentes registrados en República Dominicana durante 2025 (ONE / CONANI).',
    mythsAndFacts: [
      {
        myth: '"En la primera relación sexual no se puede quedar en embarazo."',
        reality: 'Biológicamente el embarazo puede ocurrir desde la primera relación si ha comenzado la ovulación.'
      },
      {
        myth: '"Si tu pareja te pide pruebas de amor, debes aceptarlas por compromiso."',
        reality: 'El amor genuino respeta tus tiempos y tus límites. La intimidad debe ser libre, consensuada y sin presiones ni chantajes.'
      },
      {
        myth: '"La educación sexual adelanta el inicio de las relaciones."',
        reality: 'La evidencia de la UNESCO demuestra que la educación integral retrasa el inicio sexual y fomenta conductas más responsables.'
      }
    ],
    warningSigns: [
      'Relaciones asimétricas de poder con parejas notablemente mayores.',
      'Presión constante para tener intimidad bajo amenazas de ruptura afectiva.',
      'Falta de metas académicas o sensación de desorientación respecto al futuro profesional.',
      'Miedo a acudir a un centro de atención primaria de salud por temor a ser juzgado.'
    ],
    actionSteps: [
      'Define tu proyecto de vida: escribe tus metas para los próximos 3, 5 y 10 años.',
      'Conversa sin tabúes con profesionales de orientación escolar sobre métodos preventivos.',
      'Conoce los servicios amigables de salud para adolescentes de tu localidad.'
    ],
    targetAudience: 'Adolescentes de 12 a 18 años'
  },
  {
    id: 'acoso-violencia',
    title: 'Acoso Escolar (Bullying) y Cultura de Paz',
    subtitle: 'Por aulas seguras, libres de ciberacoso y hostigamiento',
    summary: 'Construyendo convivencia respetuosa, mediación asertiva entre compañeros y desarticulación del silencio cómplice.',
    description: 'El acoso escolar destruye la autoestima y compromete la permanencia educativa. Abordamos tanto el bullying presencial (físico, verbal y exclusión social) como el ciberacoso en redes sociales y grupos de mensajería, empoderando a los espectadores para actuar.',
    color: '#62B6B0',
    keyStats: '27% de estudiantes dominicanos reportó acoso escolar varias veces al mes en PISA 2025.',
    mythsAndFacts: [
      {
        myth: '"Son cosas de muchachos que forjan el carácter."',
        reality: 'El acoso causa traumas psicológicos duraderos, bajo rendimiento, fobia escolar y cuadros depresivos.'
      },
      {
        myth: '"El que avisa a los maestros es un \'chivato\'."',
        reality: 'Pedir ayuda para detener un abuso es un acto de valentía y solidaridad que protege la dignidad de todos.'
      },
      {
        myth: '"Si me insultan por redes y no lo veo, no me hace daño."',
        reality: 'El ciberacoso penetra la intimidad del hogar las 24 horas y requiere contención y registro de pruebas para ser frenado.'
      }
    ],
    warningSigns: [
      'Resistencia persistente a asistir a la escuela o quejas somáticas (dolor de estómago/cabeza recurrente).',
      'Pérdida de útiles escolares, ropa rota o golpes sin explicación lógica.',
      'Tristeza repentina después de revisar el teléfono móvil o grupos de chat.',
      'Almuerza o pasa los recreos solo en esquinas apartadas de la escuela.'
    ],
    actionSteps: [
      'No te rías ni compartas burlas o memes denigrantes hacia tus compañeros.',
      'Sé un aliado activo: acércate a la víctima y ofrécele sentarse contigo.',
      'Reporta confidencialmente los casos ante el Consejo Estudiantil o el equipo directivo.'
    ],
    targetAudience: 'Estudiantes, comités de disciplina y profesores'
  },
  {
    id: 'liderazgo-agentes',
    title: 'Liderazgo Juvenil y Agentes de Cambio',
    subtitle: 'Protagonismo estudiantil transformador en las comunidades',
    summary: 'Capacitación en habilidades para la vida, oratoria, resolución pacífica de conflictos y proyectos comunitarios sostenibles.',
    description: 'Los jóvenes no somos solo el futuro: somos el presente de nuestras escuelas. Este eje forma a delegados y líderes de aula para que repliquen mensajes de prevención, organicen foros y promuevan ambientes de inclusión y respeto en el Distrito 15-01.',
    color: '#263746',
    keyStats: 'Cientos de estudiantes formándose como líderes multiplicadores en los centros del 15-01.',
    mythsAndFacts: [
      {
        myth: '"Líder es únicamente quien tiene un cargo oficial o habla fuerte."',
        reality: 'El liderazgo auténtico se demuestra con el ejemplo, la empatía, la coherencia y el servicio a los demás.'
      },
      {
        myth: '"Los estudiantes no tenemos poder para cambiar la realidad de una escuela."',
        reality: 'Cuando el estudiantado se organiza con respeto y argumentos claros, logra transformaciones institucionales históricas.'
      },
      {
        myth: '"Para liderar no se necesita preparación."',
        reality: 'El liderazgo requiere cultivo continuo de habilidades blandas, inteligencia emocional y pensamiento crítico.'
      }
    ],
    warningSigns: [
      'Desinterés generalizado por los espacios de participación estudiantil.',
      'Falta de diálogo entre los consejos de curso y la dirección del centro.',
      'Sensación de apatía frente a las problemáticas que aquejan al plantel.'
    ],
    actionSteps: [
      'Involúcrate en el Consejo de Curso de tu sección escolar.',
      'Participa en las convocatorias distritales y foros de debate juvenil.',
      'Promueve proyectos de mejora en tu centro: murales informativos, buzones de sugerencias y debates.'
    ],
    targetAudience: 'Delegados estudiantiles y jóvenes con vocación social'
  }
];

export const RECURSOS_EDUCATIVOS: RecursoEducativo[] = [
  {
    id: 'rec-vapeo-guia',
    title: 'Guía Rápida: Los Vapeadores al Descubierto',
    category: 'Guía Práctica',
    ejeId: 'vapeo-sustancias',
    author: 'Equipo Técnico Generación Consciente',
    date: 'Noviembre 2025',
    readTime: '6 min de lectura',
    summary: 'Análisis detallado de la toxicidad de los e-líquidos, el aerosol químico y su impacto directo en el rendimiento deportivo y cerebral.',
    content: [
      'Durante los últimos tres años, la presencia de cigarrillos electrónicos en los alrededores y baños de los centros de secundaria ha encendido las alarmas de las autoridades sanitarias y docentes.',
      'Contrario a la publicidad engañosa de las tabacaleras, el vapor inhalado no es inocuo: contiene glicerina vegetal calentada que genera compuestos carbonílicos cancerígenos, metales pesados desprendidos de la resistencia incandescente y dosis de nicotina altamente concentradas.',
      'En un cerebro adolescente que aún se encuentra en proceso de mielinización hasta los 25 años, la nicotina reprograma los circuitos de recompensa, reduciendo la memoria de trabajo, la atención y aumentando la predisposición a trastornos de ansiedad crónica.'
    ],
    keyTakeaways: [
      'Un pod desechable contiene tanta nicotina como una cajetilla de 20 cigarrillos.',
      'Afecta la capacidad pulmonar aeróbica en atletas juveniles.',
      'La nicotina daña el desarrollo de la corteza prefrontal, afectando la toma de decisiones.'
    ]
  },
  {
    id: 'rec-acoso-protocolo',
    title: 'Protocolo de Convivencia y Respuesta Escolar ante el Bullying',
    category: 'Artículo',
    ejeId: 'acoso-violencia',
    author: 'Robelin Mejias & Jennyfer Lopez',
    date: 'Octubre 2025',
    readTime: '8 min de lectura',
    summary: 'Ruta clara de acción paso a paso para estudiantes testigos o afectados por acoso en centros del Distrito Educativo 15 - 01.',
    content: [
      'El acoso escolar no es un conflicto común entre pares donde ambas partes están en igualdad de condiciones; el bullying se caracteriza por un desequilibrio evidente de poder, intención deliberada de lastimar y reiteración constante en el tiempo.',
      'En el Distrito 15-01 apostamos por la figura del "observador valiente". Las estadísticas de PISA demuestran que en el 80% de los casos donde un compañero interviene o notifica discretamente a un docente, el acoso se detiene en menos de 10 segundos.',
      'Este protocolo describe cómo documentar agresiones digitales (capturas de pantalla con fecha y hora), cómo solicitar la intervención del Departamento de Psicología sin poner en riesgo tu integridad física y cuáles son los derechos consagrados en la Ley 136-03 del Código del Menor dominicano.'
    ],
    keyTakeaways: [
      'Diferenciar entre conflicto puntual y acoso sistemático.',
      'Preservar evidencia digital sin reenviar contenido vejatorio.',
      'Exigir confidencialidad al personal escolar receptor de la denuncia.'
    ]
  },
  {
    id: 'rec-salud-mental-primeros-auxilios',
    title: 'Primeros Auxilios Emocionales: ¿Cómo Apoyar a un Compañero?',
    category: 'Guía Práctica',
    ejeId: 'salud-mental',
    author: 'Jennyfer Lopez (Coordinadora de Salud Mental)',
    date: 'Septiembre 2025',
    readTime: '5 min de lectura',
    summary: 'Pautas de contención básica para cuando un amigo está atravesando un ataque de pánico o un momento de angustia severa.',
    content: [
      'A menudo queremos ayudar a un amigo que llora o tiembla, pero no sabemos qué palabras utilizar y caemos en clichés que invalidan su dolor ("no es para tanto", "tienes que ser fuerte").',
      'El primer auxilio emocional consiste simplemente en acompañar con presencia calmada. Lleva a la persona a un lugar tranquilo y ventilado. Utiliza la técnica del 5-4-3-2-1 para aterrizar los sentidos: pídele que mencione 5 cosas que ve, 4 que pueda tocar, 3 que escuche, 2 que pueda oler y 1 respiración profunda.',
      'Recuerda tu límite: los estudiantes somos puentes de amor y contención, pero nunca reemplazamos el diagnóstico ni la terapia psicológica. Si hay riesgo autolesivo, avisa siempre a un adulto de confianza.'
    ],
    keyTakeaways: [
      'Estar presente en silencio vale más que dar consejos apresurados.',
      'Aprender técnicas de respiración diafragmática para momentos de pánico.',
      'Conocer los números telefónicos directos de emergencia psicológica gratuitos.'
    ]
  },
  {
    id: 'rec-investigacion-embarazo',
    title: 'Factores de Incidencia del Embarazo Adolescente en R.D. (2025)',
    category: 'Investigación',
    ejeId: 'embarazo-adolescente',
    author: 'Análisis de Datos ONE / CONANI',
    date: 'Agosto 2025',
    readTime: '10 min de lectura',
    summary: 'Revisión exhaustiva de las cifras nacionales, brechas de información y políticas públicas necesarias en el ámbito distrital.',
    content: [
      'Con más de 16,400 casos reportados durante el año 2025 en la República Dominicana, el embarazo adolescente continúa siendo una de las principales barreras estructurales para la culminación del bachillerato y el ingreso a la educación técnico-superior.',
      'El estudio resalta que más del 65% de las adolescentes encuestadas manifestaron no haber recibido información oportuna sobre métodos anticonceptivos de barrera ni sobre el manejo de relaciones afectivas saludables en sus hogares o escuelas.',
      'El programa Generación Consciente plantea que la solución radica en talleres interactivos liderados por los propios jóvenes, derribando tabúes mediante un lenguaje cercano, empático y con rigor científico.'
    ],
    keyTakeaways: [
      'La deserción escolar tras un embarazo temprano alcanza el 42% en zonas periurbanas.',
      'La educación sexual integral fundamentada en valores y ciencia disminuye los embarazos no planificados.',
      'El fortalecimiento del proyecto de vida genera aspiraciones profesionales sólidas.'
    ]
  },
  {
    id: 'rec-infografia-habitos',
    title: 'Infografía: Señales Silenciosas del Ciberacoso en Redes',
    category: 'Infografía',
    ejeId: 'acoso-violencia',
    author: 'Comité de Comunicaciones GC 15-01',
    date: 'Julio 2025',
    readTime: '3 min de lectura',
    summary: 'Guía visual sobre grupos de "quema" en WhatsApp, suplantación de perfiles en Instagram/TikTok y exclusión deliberada en juegos en línea.',
    content: [
      'El ciberacoso no deja moretones visibles en la piel, pero sus cicatrices en la psique adolescente pueden ser devastadoras.',
      'Revisamos las modalidades más comunes que afectan a nuestros centros del Distrito 15-01: creación de páginas anónimas de chismes ("gossip pages"), stickers denigrantes en grupos de salón, difusión no consentida de fotografías privadas y doxxing (revelación de datos personales y ubicación).',
      'Conoce cómo activar la verificación en dos pasos, configurar perfiles como privados y hacer denuncias ante el Departamento de Investigación de Crímenes y Delitos de Alta Tecnología (DICAT).'
    ],
    keyTakeaways: [
      'Bloquear y denunciar es el primer paso legal.',
      'No alimentar el morbo reenviando publicaciones lesivas.',
      'Tus contraseñas no son prendas de amistad; no las compartas jamás.'
    ]
  }
];

export const INITIAL_ACTIVITIES: Actividad[] = [];

export const DIRECTORY_EMERGENCY_CONTACTS = [
  {
    entity: 'Línea de la Vida (Salud Pública)',
    phone: '809-200-1400',
    tollFree: true,
    hours: '24 horas / 7 días',
    description: 'Atención psicológica gratuita inmediata ante crisis emocionales, depresión y prevención del suicidio.',
    badge: 'Salud Mental'
  },
  {
    entity: 'CONANI (Consejo Nacional para la Niñez y la Adolescencia)',
    phone: '809-567-2233',
    tollFree: false,
    hours: 'Lunes a Viernes 8:00 AM - 4:00 PM',
    description: 'Protección legal, restitución de derechos ante situaciones de desamparo, violencia o vulnerabilidad.',
    badge: 'Protección Integral'
  },
  {
    entity: 'Sistema Nacional de Emergencias 9-1-1',
    phone: '9-1-1',
    tollFree: true,
    hours: '24 horas / 7 días',
    description: 'Respuesta inmediata a situaciones críticas de salud, accidentes o agresiones físicas en curso.',
    badge: 'Emergencias'
  },
  {
    entity: 'Línea de Ayuda a la Mujer / Violencia Intrafamiliar',
    phone: '*212 / 809-689-7212',
    tollFree: true,
    hours: '24 horas / 7 días',
    description: 'Atención confidencial ante situaciones de violencia física, psicológica o sexual en el ámbito familiar o de pareja.',
    badge: 'Violencia de Género'
  }
];
