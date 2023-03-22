interface PropsNosotros {
    //imagen: string;
    titulo: string;
    subtitulo: string;
}

function CardNosotros(Props: PropsNosotros) {
    return (
        <div className="hero w-full ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h2 className="text-4xl font-bold">{Props.titulo}</h2>
                    <p className="py-6">{Props.subtitulo}</p>
                </div>
            </div>
        </div>
    );
}

export default CardNosotros;