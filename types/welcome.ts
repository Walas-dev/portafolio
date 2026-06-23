export {puntos, syntaxElements, content, enlaces, states, img, VARIANTS}
const puntos = [
    {id:1 , style:'bg-rose-500 size-4 rounded-full'},
    {id:2, style:'bg-yellow-500 size-4 rounded-full'},
    {id:3, style:'bg-green-500 size-4 rounded-full'}
]

const syntaxElements = [
  { id: 1, symbol: '< />', left: '10%', duration: 18, delay: 0, scale: 0.8, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 2, symbol: '{ }', left: '25%', duration: 22, delay: 2, scale: 1.2, glowColor: 'rgba(255, 0, 85, 0.6)' }, 
  { id: 3, symbol: ';', left: '40%', duration: 15, delay: 5, scale: 0.9, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 4, symbol: '+', left: '55%', duration: 25, delay: 1, scale: 1.5, glowColor: 'rgba(99, 102, 241, 0.6)' }, 
  { id: 5, symbol: '()', left: '70%', duration: 19, delay: 3, scale: 1.0, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 6, symbol: '[ ]', left: '85%', duration: 21, delay: 6, scale: 0.7, glowColor: 'rgba(255, 0, 85, 0.6)' }, 
  { id: 7, symbol: '/', left: '15%', duration: 20, delay: 4, scale: 1.1, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 8, symbol: '=>', left: '50%', duration: 16, delay: 7, scale: 1.3, glowColor: 'rgba(99, 102, 241, 0.6)' }, 
  { id: 9, symbol: '||', left: '80%', duration: 24, delay: 2, scale: 0.8, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 10, symbol: '&&', left: '30%', duration: 17, delay: 8, scale: 1.0, glowColor: 'rgba(255, 0, 85, 0.6)' }, 
];

const content = [
    {   
        id:1, 
        title:'Sistemas para el', 
        span:'Crecimiento Infinito',
        p:'Construyo arquitecturas de microservicios que evolucionan con tu negocio. Convierte la complejidad técnica en una ventaja competitiva escalable y de alto rendimiento.'},
    {   
        id:2, 
        title:'Seguridad e', 
        span:'Inteligencia Electrónica',
        p:'Protejo tus activos mediante el despliegue de infraestructura de videovigilancia IP y monitoreo avanzado. Seguridad física respaldada por precisión técnica.'},
    {   
        id:3, 
        title:'Continuidad y', 
        span:'Resiliencia Técnica',
        p:'Garantizo que tu tecnología nunca se detenga. Soporte especializado, mantenimiento preventivo y optimización de redes para una operatividad sin interrupciones.'},
    {
        id: 4, 
        title: 'Presencia y', 
        span: 'Autoridad Digital', 
        p: 'Diseño y desarrollo de Landing Pages optimizadas para conversión. Eleva la imagen de tu empresa o marca personal con interfaces rápidas, modernas y orientadas a resultados.'
    }
];

const enlaces = [
    { id: 1, enlace: 'Ver proyectos', ref:"https://github.com/Walas-dev?tab=repositories",class:'bg-[#FBF6EE] text-[#111111] hover:text-[#FBF6EE]', element:'bg-portground', color: '#193cb8', path: 'M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z', url: '/' },
    { id: 2, enlace: '', class:'border-2 border-[#FBF6EE] text-[#FBF6EE] hover:border-transparent', element:'bg-portground', color: '#ffff', path: 'M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z', url: '' },
]

const states = [
    { id: 1, state: true, estado: 'disponible para proyectos', color:'bg-green-500' },
    { id: 2, state: false, estado: 'En un proyecto', color:'bg-amber-500' },
    { id: 3, state: false, estado: 'Agenda llena', color:'bg-red-500' }
]

const img = [
    { id: 1, enlace: 'code', path: 'M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z' },
    { id: 2, enlace: 'trabajo', path: 'M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z' },
    { id: 3, enlace: 'correo', path: 'M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z' },
]

const VARIANTS = [
    "está de moda.",
    "es un arte.",
    "es mi pasión.",
];