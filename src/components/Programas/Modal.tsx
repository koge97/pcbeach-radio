import { useCallback, useEffect } from 'react';
import InterfaceBloque from '../../interfaces/InterfaceBloque';

interface PropsModal {
    bloque: InterfaceBloque;
    open: boolean;
    setOpen: Function;
}

function Modal(Props: PropsModal) {
    const { bloque, open, setOpen } = Props;

    const funcionEsc = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            if(open) {
                setOpen(false);
            }
        }
    }, [open,setOpen]);

    useEffect(() => {
        document.addEventListener('keydown', funcionEsc);

        return () => {
            document.removeEventListener('keydown', funcionEsc);
        };
    }, [funcionEsc]);
    
    const { programa } = bloque;

    function close() {
        setOpen(false);
    }


    const translate = open ? '-translate-y-none' : '-translate-y-[64rem] ';
    const size = open ? 'h-[calc(100vh-10rem)] lg:h-[calc(100vh-6rem)] w-screen' : 'w-0 h-0 overflow-hidden';

    return (
        <div className={`fixed flex px-2 left-0 top-0 ${size} `}>
            <div className={`my-auto modal-box z-10 bg-gradient-to-br ${programa.bgFrom} ${programa.bgTo} ${programa.colorTexto} ${translate} p-8 relative mx-auto transition-all duration-300 ease-in-out `}>
                <h3 className="font-bold text-xl mb-6">{bloque.programa.titulo}</h3>
                <p className="">{bloque.programa.descripcion}</p>
                <div className="modal-action">
                    <button onClick={close} className="btn btn-secondary shadow-lg border border-slate-400/60">
                        Cerrar
                    </button>
                </div>
            </div>
            {open ?
                <div onClick={close} className={`z-5 fixed left-0 top-0 w-full h-full bg-gradient-to-tl opacity-50 ${programa.bgFrom} ${programa.bgTo} backdrop-blur`}>
                    <div className='w-full h-full bg-white/50 dark:bg-slate-900/50'></div>
                </div>
                : <></>
            }
        </div>
    );
}

export default Modal;