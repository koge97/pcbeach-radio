import CardNosotros from "./CardNosotros";

const descripciones = [
    {
        titulo: "Quienes Somos",
        subtitulo: "PCBeach ofrece servicios de soporte informático y tecnología de vanguardia a empresas y particulares desde 2006. Proporcionamos soluciones tecnológicas personalizadas y eficaces, incluyendo instalación de cámaras de seguridad y nuestra nueva señal de Radio Online y FM. Nos enfocamos en la satisfacción del cliente y construimos relaciones sólidas con ellos. Valoramos la innovación y la mejora continua, y nos mantenemos actualizados en las últimas tecnologías. Si necesita ayuda tecnológica, no dude en contactarnos."
    },
    {
        titulo: 'Nuestra Misión',
        subtitulo: 'Nuestra misión es ofrecer servicios de soporte informático y tecnología personalizados y eficaces para empresas y particulares con el más alto nivel de excelencia. Valoramos la honestidad, la integridad y la confiabilidad, y estamos comprometidos a trabajar en estrecha colaboración con nuestros clientes para garantizar su satisfacción y seguridad. Nuestra visión es liderar la industria de la tecnología, invirtiendo en tecnología de vanguardia y capacitación para brindar servicios de alta calidad y mejorar la vida de las personas.',
    },
];

function Nosotros() {
    return(
        <section id="nosotros" className="flex flex-col py-16 px-6 space-y-2 bg-zinc-50 dark:bg-zinc-900  text-center">
            <h1 className="text-5xl font-bold">Sobre nosotros</h1>
            <div>
                <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-center space-y-6 md:space-y-0 md:space-x-6">
                    {
                        descripciones.map((descripcion, index) => {
                            return(
                                <CardNosotros key={index} titulo={descripcion.titulo} subtitulo={descripcion.subtitulo} />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Nosotros;