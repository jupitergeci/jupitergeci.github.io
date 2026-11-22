export const profile = {
  name: 'Alejandro Murillo González',
  affiliation: { es: 'Estudiante de Magíster en Física', en: 'Physics master’s student' },
  institution: 'Universidad Técnica Federico Santa María',

  bio: {
    es: 'Mi investigación se centra en la formación planetaria, las interacciones planeta-disco y la dinámica de discos protoplanetarios y circumplanetarios. Mediante astrofísica computacional y simulaciones hidrodinámicas tridimensionales, estudio la circulación del gas, los procesos de acreción y su evolución térmica. También desarrollo software científico para explorar estos sistemas. Fuera de la investigación, encuentro en la pintura al óleo y la música otras formas de expresar mi fascinación por el universo.',
    en: 'My research focuses on planet formation, planet–disk interactions, and the dynamics of protoplanetary and circumplanetary disks. Through computational astrophysics and three-dimensional hydrodynamical simulations, I investigate gas circulation, accretion processes, and their thermal evolution. I also develop scientific software to explore these systems. Beyond research, I find in oil painting and music other ways to express my fascination with the universe.'
  },
  contact: [
    { label: 'bmurillo@usm.cl', href: 'mailto:bmurillo@usm.cl' },
    { label: 'GitHub · jupitergeci', href: 'https://github.com/jupitergeci/' },
  ],
  links: [
    { label: { es: 'Publicaciones en ORCID', en: 'Publications on ORCID' }, href: 'https://orcid.org/0009-0005-4433-2474' },
  ],
};

export const education = [
  {
    title: { es: 'Magíster en Física', en: 'Master’s in Physics' },
    institution: 'Universidad Técnica Federico Santa María',
    period: { es: '2026 – presente', en: '2026 – present' },
    description: { es: 'Investigo la estructura y evolución térmica del entorno circumplanetario de PDS 70c con simulaciones 3D que incluyen enfriamiento radiativo, calentamiento y posibles shocks.', en: 'I investigate the structure and thermal evolution of the circumplanetary environment of PDS 70c using 3D simulations that include radiative cooling, heating processes, and potential shocks.' },
  },
  {
    title: { es: 'Título profesional en Astronomía', en: 'Professional Degree in Astronomy' },
    institution: 'Universidad de Antioquia',
    period: '2026',
    description: { es: 'Mi tesis de pregrado combinó FARGO3D y el desarrollo de FARGOpy para estudiar flujos meridionales, morfología y soporte rotacional subkepleriano del disco circumplanetario de PDS 70c; dio origen a mi primera publicación como primer autor.', en: 'My undergraduate thesis combined FARGO3D and FARGOpy to study meridional flows, morphology, and sub-Keplerian rotational support in the circumplanetary disk of PDS 70c, leading to my first first-author publication.' },
  },
];

export const experience = [
  {
    title: { es: 'FARGOpy', en: 'FARGOpy' },
    institution: 'Universidad de Antioquia / UTFSM',
    period: { es: '2024 – presente', en: '2024 – present' },
    description: { es: 'Soy codesarrollador principal de FARGOpy, una biblioteca abierta de Python para ejecutar, procesar y visualizar simulaciones de FARGO3D. Desarrollo análisis 2D/3D, líneas de corriente, diagnósticos de flujo y herramientas reproducibles que acercan la astrofísica computacional a más investigadores.', en: 'I am a lead co-developer of FARGOpy, an open-source Python library for running, processing, and visualizing FARGO3D simulations. I build 2D/3D analysis tools, streamlines, flow diagnostics, and reproducible workflows that make computational astrophysics more accessible.' },
  },
  {
    title: { es: 'Proyecto FONDECYT Regular 1241818', en: 'FONDECYT Regular Project 1241818' },
    institution: 'Universidad Técnica Federico Santa María',
    period: { es: '2026 – presente', en: '2026 – present' },
    description: { es: 'Participo como investigador en formación en un proyecto sobre el efecto de vientos estelares impulsados por radiación en discos protoplanetarios y circumplanetarios. Mi contribución aborda la dinámica del gas y su evolución térmica mediante simulaciones hidrodinámicas 3D.', en: 'As an early-career researcher, I contribute to a project on the effects of radiation-driven stellar winds on protoplanetary and circumplanetary disks. My work focuses on gas dynamics and thermal evolution through 3D hydrodynamic simulations.' },
  },
  {
    title: { es: 'Docencia de astronomía y STEAM', en: 'Astronomy and STEAM teaching' },
    institution: 'Snapology',
    period: '2022 – 2025',
    description: { es: 'Diseñé e impartí actividades de astronomía y STEAM en escuelas de Medellín. Adapté los materiales y las dinámicas para que niñas, niños, adolescentes y adultos pudieran explorar los mismos conceptos desde distintos niveles de experiencia.', en: 'I designed and taught astronomy and STEAM activities in schools across Medellín, adapting materials and activities for children, teenagers, and adults with different levels of experience.' },
  },
];

export const publications = [
  {
    title: 'Three-dimensional circumplanetary flows in a PDS 70c-inspired system: hydrodynamic simulations with FARGO3D and analysis with FARGOpy',
    authors: { es: 'A. Murillo-González, J. I. Zuluaga y M. Montesinos', en: 'A. Murillo-González, J. I. Zuluaga, and M. Montesinos' },
    venue: 'New Astronomy, vol. 130, art. 102643',
    date: { es: 'En línea desde 2026 · Volumen de enero de 2027', en: 'Online since 2026 · January 2027 issue' },
    summary: { es: 'Mediante simulaciones hidrodinámicas 3D de planetas de 2, 4 y 8 masas de Júpiter, caracterizamos discos circumplanetarios compactos y subkeplerianos, alimentados por flujos meridionales que atraviesan la esfera de Hill.', en: 'Using 3D hydrodynamic simulations of 2, 4, and 8 Jupiter-mass planets, we characterized compact, sub-Keplerian circumplanetary disks fed by meridional flows crossing the Hill sphere.' },
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1016/j.newast.2026.102643' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2609.00281' },
    ],
  },
];

export const research = [
  {
    title: { es: 'Shocks y estructura térmica de PDS 70c', en: 'Shocks and thermal structure around PDS 70c' },
    description: { es: 'Extiendo FARGO3D con física térmica para resolver la evolución de la energía del gas, incluyendo enfriamiento radiativo, irradiación estelar y disipación viscosa. Analizo la circulación meridional y las regiones de compresión y calentamiento para identificar posibles shocks y su efecto sobre la morfología circumplanetaria.', en: 'I extend FARGO3D with thermal physics to evolve the gas energy equation, including radiative cooling, stellar irradiation, and viscous dissipation. I analyze meridional circulation and localized compression and heating to investigate potential shocks and their impact on circumplanetary morphology.' },
  },
  {
    title: { es: 'Disrupción de marea en discos protoplanetarios', en: 'Tidal disruption in protoplanetary disks' },
    description: { es: 'Junto con Matías Montesinos y Vincent Honorato, estudio mediante simulaciones hidrodinámicas 2D cómo las interacciones gravitacionales de cuerpos inmersos en discos viscosos pueden producir disrupción de marea, captura y redistribución del gas.', en: 'With Matías Montesinos and Vincent Honorato, I use 2D hydrodynamic simulations to investigate how gravitational interactions involving bodies embedded in viscous disks can drive tidal disruption, gas capture, and redistribution.' },
  },
];

export type Locale = 'es' | 'en';

type LocalizedText = Record<Locale, string>;
type Painting = { title: string | LocalizedText; views: { file: string; alt: LocalizedText }[] };

export const paintings: Painting[] = [
  {
    title: '',
    views: [
      { file: 'nubes1.jpg', alt: { es: 'Objetos surrealistas flotan entre nubes bajo un cielo azul.', en: 'Surreal objects float among clouds beneath a blue sky.' } },
      { file: 'nubes2.jpg', alt: { es: 'Un ojo y un corazón descansan sobre una nube encima de un girasol.', en: 'An eye and a heart rest on a cloud above a sunflower.' } },
      { file: 'nubes3.jpg', alt: { es: 'Un iris amarillo emerge de una nube blanca.', en: 'A yellow iris emerges from a white cloud.' } },
      { file: 'nubes4.jpg', alt: { es: 'Un corazón rojo aparece entre nubes blancas.', en: 'A red heart appears among white clouds.' } },
      { file: 'nubes5.jpg', alt: { es: 'Un planeta anillado se conecta con una forma naranja mediante un cordón amarillo.', en: 'A ringed planet is tied to an orange form by a yellow cord.' } },
      { file: 'nubes6.jpg', alt: { es: 'Un techo rojo y una esfera oscura asoman sobre una nube.', en: 'A red roof and a dark sphere emerge from a cloud.' } },
      { file: 'nubes7.jpg', alt: { es: 'Una abeja y un recipiente oscuro flotan sobre una nube.', en: 'A bee and a dark vessel float above a cloud.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'telescopio21.jpg', alt: { es: 'Un observatorio rojo domina una llanura ocre de objetos suspendidos.', en: 'A red observatory overlooks an ochre plain of floating objects.' } },
      { file: 'telescopio22.jpg', alt: { es: 'Un observatorio rojo con antenas bajo un cielo negro.', en: 'A red observatory with antennas beneath a black sky.' } },
      { file: 'telescopio23.jpg', alt: { es: 'Un objeto azul cuelga por encima de varias esferas en un terreno ocre.', en: 'A blue object hangs over several spheres in an ochre landscape.' } },
      { file: 'telescopio24.jpg', alt: { es: 'Una figura alada roja y dorada aparece entre esferas flotantes.', en: 'A red and gold winged figure appears among floating spheres.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'planeta.jpg', alt: { es: 'Una mano se alza hacia un planeta anillado entre estrellas.', en: 'A hand reaches toward a ringed planet among the stars.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'saturno.jpg', alt: { es: 'Un planeta anillado flota sobre un paisaje ocre de formas orgánicas.', en: 'A ringed planet floats above an ochre landscape of organic shapes.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'telescopio.jpg', alt: { es: 'Un telescopio azul apunta hacia un planeta suspendido sobre un paisaje.', en: 'A blue telescope points toward a planet suspended above a landscape.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'universo1.jpg', alt: { es: 'Un telescopio junto a un suelo ajedrezado mira hacia un cielo oscuro.', en: 'A telescope beside a checkered floor looks out into a dark sky.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'universo2.jpg', alt: { es: 'Una cúpula de observatorio se alza bajo un cielo azul con nubes.', en: 'An observatory dome rises against a blue sky dotted with clouds.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'carro.jpg', alt: { es: 'Un automóvil blanco cruza un paisaje desértico bajo un ojo gigante.', en: 'A white car crosses a desert landscape under a giant eye.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'cerebro.jpg', alt: { es: 'Un cerebro corona una figura azul sobre un paisaje de nubes.', en: 'A brain crowns a blue figure over a landscape of clouds.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'faro.jpg', alt: { es: 'Un faro rojo y blanco sostiene una esfera luminosa en un cielo estrellado.', en: 'A red and white lighthouse supports a glowing sphere in a starry sky.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'hongos.jpg', alt: { es: 'Un paisaje de hongos de colores bajo un ojo suspendido en el cielo.', en: 'A landscape of colorful mushrooms lies beneath a suspended eye.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'mano.jpg', alt: { es: 'Una mano sostiene una planta bajo una figura blanca suspendida.', en: 'A hand holds a plant beneath a suspended white figure.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'ovni.jpg', alt: { es: 'Un platillo volador sobrevuela un campo con árboles.', en: 'A flying saucer hovers above a field with trees.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'raya.jpg', alt: { es: 'Una raya blanca flota sobre figuras humanas en un fondo oscuro.', en: 'A white ray floats above human figures against a dark background.' } },
    ],
  },
  {
    title: '',
    views: [
      { file: 'telescopio3.jpg', alt: { es: 'Una antena roja y blanca apunta hacia una forma ardiente en el cielo.', en: 'A red and white antenna points toward a fiery form in the sky.' } },
    ],
  },
];

export const interests = [
  { title: { es: 'De la simulación a la observación', en: 'From simulation to observation' }, description: { es: 'Me interesa conectar la astrofísica computacional con los datos: aplicar transferencia radiativa a modelos hidrodinámicos para generar observaciones sintéticas y contrastarlas con ALMA y el VLT.', en: 'I aim to connect computational astrophysics with observations by applying radiative transfer to hydrodynamic models, producing synthetic observations that can be compared with ALMA and VLT data.' } },
  { title: { es: 'Pintura al óleo y surrealismo', en: 'Oil painting and surrealism' }, description: { es: 'En mis pinturas al óleo, la astrofísica dialoga con el surrealismo: planetas, observatorios y cielos se encuentran con objetos cotidianos, entre la precisión de lo que estudiamos y la libertad de imaginarlo.', en: 'In my oil paintings, astrophysics meets surrealism: planets, observatories, and skies share space with everyday objects, somewhere between the precision of scientific inquiry and the freedom of imagination.' } },
  { title: { es: 'Guitarra y composición', en: 'Guitar and composition' }, description: { es: 'Toco guitarra en Mañana el Espacio. La composición musical es otra de mis formas de explorar ideas creativas.', en: 'I play guitar in Mañana el Espacio. Writing music is another way I explore creative ideas.' } },
  { title: { es: 'Escritura y poesía', en: 'Writing and poetry' }, description: { es: 'Me interesan la escritura creativa y la poesía, en especial su capacidad de acercar imágenes e ideas que en principio parecen distantes.', en: 'I am drawn to creative writing and poetry for the way they can bring seemingly distant images and ideas together.' } },
];

export const band = { name: 'Mañana el Espacio', url: 'https://www.mananaelespacio.com/' };
