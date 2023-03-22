import { IconType } from "react-icons";

interface PropsCardContacto {
    icono: IconType;
    iconoBackground: string;
    titulo: string;
    descripcion: string;
    direccion: string;
    accion: string;
    href: string;
}

function CardContacto(Props: PropsCardContacto) {
    return (
        <div className='w-96 p-4 dark:bg-zinc-900 border border-slate-200/20 dark:border-slate-800/20 shadow-xl m-8 rounded-xl '>
            <div className="flex justify-center w-full h-full">
                <div className={`flex justify-center items-center text-center rounded-full w-14 h-14 ${Props.iconoBackground}`}>
                    <Props.icono className="w-8 h-8 text-white" />
                </div>
            </div>
            <div className="card-body items-center text-center p-2">
                <h2 className="card-title text-2xl">{Props.titulo}</h2>
                <p className="text-lg text-slate-800 dark:text-slate-100">{Props.descripcion}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{Props.direccion}</p>
                <div className="card-actions justify-center w-full mt-2">
                    <a href={Props.href} target="_blank" rel="noreferrer">
                        <button className="btn btn-primary text-white dark:text-slate-800">
                            {Props.accion}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardContacto;