import CardNosotros from "./CardNosotros";

const descripciones = [
    {
        titulo: "Quienes Somos",
        subtitulo: "Somos una radio comunitaria enraizada en la comuna de Paine, en la que hemos cultivado una vasta experiencia de más de una década en el campo de la radiodifusión. La señal que transmitimos, autorizada por la Subsecretaría de Telecomunicaciones, se encuentra en la frecuencia 106.1 FM."
    },
    {
        titulo: 'Nuestra Misión',
        subtitulo: 'Nos esforzamos en proporcionar información inclusiva y de calidad, fomentando valores como la diversidad cultural, la convivencia democrática y la libertad de expresión. Siempre bajo los más altos estándares de responsabilidad y ética informativa, trabajamos para un futuro próspero y mejor informado de Paine y su audiencia.',
    },
];

function Nosotros() {
    return(
        <section id="nosotros" className="flex flex-col py-16 px-6 space-y-2 bg-zinc-50 dark:bg-zinc-900  text-center">
            <h1 className="text-5xl font-bold">Nosotros</h1>
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