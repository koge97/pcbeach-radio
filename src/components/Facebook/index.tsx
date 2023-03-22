import Frame from "./Frame";

function Facebook() {
    return (
        <section id="facebook" className=" bg-zinc-50 dark:bg-zinc-900 py-16 px-6 text-center divide-gray-300/20">
            <div className="text-center pb-4 space-y-6">
                <h1 className='text-5xl font-bold'>
                    Nuestra Pagina de Facebook
                </h1>
                <h2 className="text-lg font-semiboldbold ">
                Revisa aquí nuestra página de Facebook para ver programas en vivo e interactuar con nuestros locutores.
                </h2>
            </div>
            <Frame />
        </section>
    );
}

export default Facebook;