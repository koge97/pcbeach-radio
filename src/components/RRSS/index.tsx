import Facebook from "./Facebook";
import Instagram from "./Instagram";

function RRSS() {
    return (
        <section id="facebook" className=" bg-zinc-50 dark:bg-zinc-900 py-16 px-6 text-center divide-gray-300/20">
            <div className="text-center pb-4 space-y-6">
                <h1 className='text-5xl font-bold'>
                    Nuestras Redes Sociales
                </h1>
                <h2 className="text-lg font-semiboldbold max-w-2xl mx-auto ">
                Síguenos en nuestras redes sociales para estar al tanto de las últimas noticias de tecnología, tendencias de la industria y programas en vivo en nuestra estación de radio. Únete a nuestra comunidad en línea y mantente conectado con los expertos en tecnología y la música que te apasiona.
                </h2>
            </div>
            <Facebook />
            <Instagram />
        </section>
    );
}

export default RRSS;
