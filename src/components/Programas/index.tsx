import { useState } from 'react';

import InterfaceHorario from '../../interfaces/InterfaceHorario';
import HorarioDia from './HorarioDia';
import Horas from './Horas';
import Modal from './Modal';

interface PropsProgramas {
    horario: InterfaceHorario;
};

function Programas(Props: PropsProgramas) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalBloque, setModalBloque] = useState(Props.horario[0][0]);

    const dias = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo'
    ];

    return(
        <section id="programas" className="bg-white dark:bg-zinc-800 space-y-4 py-16 px-6 xl:divide-y divide-gray-800/20 dark:divide-gray-300/20 ">
            <div className="text-center pb-4 space-y-6">
                <h1 className='text-5xl font-bold'>
                    Nuestro Horario
                </h1>
                <h2 className="text-lg font-semiboldbold ">
                    Conoce aquí nuestra programación semanal.
                </h2>
            </div>
            <div className='flex flex-col xl:flex-row xl:justify-center divide-y divide-gray-800/20 dark:divide-gray-300/20 xl:divide-y-0 xl:divide-x xl:py-4'>
                <Horas />
                {dias.map((dia, index) => {
                    return(
                        <HorarioDia key={index} setModalOpen={setModalOpen} setModalBloque={setModalBloque} horarioDia={Props.horario[index]} dia={dia} />
                    );
                })}
                <div className='hidden xl:block'></div>
            </div>
            <Modal open={modalOpen} setOpen={setModalOpen} bloque={modalBloque} />
        </section>
    );
}

export default Programas;