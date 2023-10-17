import { IconType } from "react-icons";

interface PropsEmpresas {
    //imagen: string;
    icono: IconType;
    titulo: string;
    subtitulo: string;
    atributo?: string;
    href: string;
    accion: string;
}
    

function CardEmpresas(Props: PropsEmpresas) {

    return (
        <div className='flex-initial w-72 md:w-96  p-4 dark:bg-zinc-800 border border-slate-200/20 dark:border-slate-800/20 shadow-xl rounded-xl'>
            <div className="hero-content w-full h-full justify-start flex flex-col">
                <Props.icono className="w-8 h-8 text-white" />
                <h2 className={`text-4xl font-bold ${Props.atributo}`}>{Props.titulo}</h2>
                <p className="py-6">{Props.subtitulo}</p>
                <a className="mt-auto" href={Props.href} target="_blank" rel="noreferrer">
                    <button className="btn btn-primary text-white dark:text-slate-800">
                        {Props.accion}
                    </button>
                </a>
            </div>
        </div>
    );
}

export default CardEmpresas;

