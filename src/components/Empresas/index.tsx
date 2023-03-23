import CardEmpresas from "./CardEmpresas";

const descripciones = [
    {
        titulo: "PCBeach Centro Tecnologico",
        subtitulo: "PCBeach es una empresa de servicios tecnológicos que ofrece soluciones informáticas personalizadas para empresas y particulares. Contamos con un amplio catálogo de productos de tecnología, desde computadoras y laptops hasta accesorios y periféricos de última generación. Nuestro equipo de expertos en servicio técnico brinda asistencia rápida y eficiente, garantizando que tus equipos siempre funcionen al máximo rendimiento.",
        atributo: 'text-transparent bg-clip-text bg-gradient-to-bl from-green-600 to to-lime-200'
    },
    {
        titulo: 'Sheriff Security',
        subtitulo: 'Sheriff Security es una empresa especializada en soluciones de seguridad con cámaras de vigilancia y redes de datos. Ofrecemos a nuestros clientes equipos de alta calidad y tecnología avanzada para proteger sus hogares y negocios. Nuestro equipo de expertos en seguridad trabaja para brindar una experiencia personalizada y satisfacer las necesidades de cada cliente. La confianza y satisfacción de nuestros clientes son nuestra máxima prioridad.',
        atributo: 'text-transparent bg-clip-text bg-gradient-to-bl from-yellow-600 to to-yellow-200'
    },
    {
        titulo: 'PCBeach Radio',
        subtitulo: 'PCBeach Radio es una emisora de radio en el dial 92.3FM que te transporta a los mejores momentos de tu vida con la música más icónica de los 80 y 90, además de los hits actuales más populares. Somos la opción perfecta para aquellos que buscan un sonido nostálgico pero moderno. Únete a nosotros y disfruta de la mejor selección musical desde la playa a la comodidad de tu hogar.',
        atributo: 'text-transparent bg-clip-text bg-gradient-to-bl from-pcbeach-color to to-cyan-600'
    },
];

function Empresa() {
  return (
    <section id="empresas" className="flex flex-col py-16 px-6 space-y-2 bg-zinc-50 dark:bg-zinc-900  text-center">
            <h1 className="text-5xl font-bold">Bienvenido a PCBeach</h1>
            <div>
                <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-center space-y-6 md:space-y-0 md:space-x-6">
                    {
                        descripciones.map((descripcion, index) => {
                            return(
                                <CardEmpresas key={index} titulo={descripcion.titulo} subtitulo={descripcion.subtitulo} atributo={descripcion.atributo}/>
                            );
                        })
                    }
                </div>
            </div>
        </section>
  );
}
export default Empresa;