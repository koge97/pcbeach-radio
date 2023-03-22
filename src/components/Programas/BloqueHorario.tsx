import { useState, useEffect } from 'react';

import InterfaceBloque from '../../interfaces/InterfaceBloque';

import { ImInfo } from "react-icons/im";

interface PropsBloqueHorario {
    bloque: InterfaceBloque;
    setModalOpen: Function;
    setModalBloque: Function;
}

function BloqueHorario(Props: PropsBloqueHorario) {
    const { bloque } = Props;
    const { programa } = bloque;

    const espacios = bloque.duracionMinutos / 30;

    const minutosDesdeInicio = bloque.horaMinutos - (8 * 60) /** a las 8 de la mañana empieza a transmitir */;

    const [marginTop, setMarginTop] = useState(0);

    const [height, setHeight] = useState(6);

    function handleResize() {
      if(window.innerWidth >= 1280) {
        setHeight(espacios * 4 + espacios-1);
        setMarginTop((minutosDesdeInicio / 30 * 4) + minutosDesdeInicio / 30);
      } else {
        setHeight(6);
        setMarginTop(0);
      }
    }

    function handleHover() {
      if(window.innerWidth >= 1280) {
        handleResize();
        setHeight(height + 2 );
        setMarginTop(marginTop - 1);
      } else {
        handleResize();
      }
    }

    function onClick() {
      Props.setModalBloque(bloque);
      Props.setModalOpen(true);
    }

    useEffect(() => {
        function handleResize() {
          if(window.innerWidth >= 1280) {
            setHeight(espacios * 4 + espacios-1);
            setMarginTop((minutosDesdeInicio / 30 * 4) + minutosDesdeInicio / 30);
          } else {
            setHeight(6);
            setMarginTop(0);
          }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [espacios, minutosDesdeInicio] );


    return(
        <button aria-label={`Obtener mas información del programa ${programa.titulo}.`} onClick={onClick} className={`group flex flex-col mx-3 xl:mx-2.75 xl:hover:mx-0 xl:absolute shrink-0 rounded-lg w-[9.5rem] xl:hover:w-[11rem] h-24 xl:hover:h-25 p-1.5 shadow-sm bg-gradient-to-br hover:bg-gradient-to-t ${programa.bgFrom} ${programa.bgTo} transition-all duration-300 ease-in-out cursor-pointer`} style={{height: `${height}rem`, marginTop: `${marginTop}rem`}} onMouseEnter={handleHover} onMouseLeave={handleResize}>
            <div className={`ml-auto w-4 h-4 rounded-full shadow-lg flex content-center align-middle text-white`}>
              <ImInfo />
            </div>
            <div className='h-full w-full flex flex-col group-hover:pt-2 xl:group-hover:p-3 transition-all duration-300 ease-in-out cursor-pointer'>
              <div className='text-center my-auto w-full'>
                  <p className={`text-sm ${programa.colorTexto}`}>{programa.titulo}</p>
              </div>
              <div className='mr-auto ml-3 mt-auto xl:hidden '>
                  <p className={`text-xs ${programa.colorTexto} `}>{bloque.hora} - {bloque.termino}</p>
              </div>
            </div>
        </button>
    );
}

export default BloqueHorario;