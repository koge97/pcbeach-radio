import InterfaceDia from '../../interfaces/InterfaceDia';
import BloqueHorario from './BloqueHorario';
import LineasDivisoras from './LineasDivisoras';

interface PropsHorarioDia {
    horarioDia: InterfaceDia;
    dia: string;
    setModalOpen: Function;
    setModalBloque: Function;
}

function HorarioDia(Props: PropsHorarioDia) {
    return(
        <div className='py-2 xl:pb-0 xl:w-44'>
            <div className='mx-auto my-auto text-center'>
                <p className='text-xl xl:text-base font-bold'>{Props.dia}</p>
            </div>
            <div className='flex py-3 xl:pb-0 flex-row xl:w-full xl:flex-col overflow-x-auto xl:overflow-x-hidden'>
                <LineasDivisoras />
                {Props.horarioDia.map((bloque, index) => {
                    return(
                        <BloqueHorario key={index} setModalOpen={Props.setModalOpen} setModalBloque={Props.setModalBloque} bloque={bloque} />
                    );
                })}
            </div>
        </div>
    );
}

export default HorarioDia;