//import InterfaceBloque from "../interfaces/InterfaceBloque";
import InterfaceHorario from "@/interfaces/InterfaceHorario";
import InterfaceProgramaActual from "@/interfaces/InterfaceProgramaActual";

const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
];

function HoraAMinutos(hora: string) {
    return parseInt(hora.split(":")[0]) * 60 + parseInt(hora.split(":")[1]);
}

const programas = {
    "Programacion Regular" : {
        titulo: "Programacion Regular",
        descripcion: "Programacion Regular.",
        bgFrom: "from-blue-400",
        bgTo: "to-violet-600",
        colorTexto: "text-white",
    },
    "Paine Crecemos Juntos": {
        titulo: "Paine Crecemos Juntos",
        descripcion: "Programa de información de la ilustre municipalidad de Paine con profesionales municipales.",
        bgFrom: "from-violet-800",
        bgTo: "to-green-600",
        colorTexto: "text-white",
    },
    "La mañana cristalina": {
        titulo: "La Mañana Cristalina",
        descripcion: "Música, noticias y siempre algo mas, conduce Marcela Berríos.",
        bgFrom: "from-purple-700",
        bgTo: "to-rose-900",
        colorTexto: "text-white",
    },
    "Musica de los 80's": {
        titulo: "Musica de los 80s",
        descripcion: "Musica variada y éxitos de los 80s.",
        bgFrom: "from-orange-600",
        bgTo: "to-purple-700",
        colorTexto: "text-white",
    },
    "La nueva fiesta del charro": {
        titulo: "La Nueva Fiesta del Charro",
        descripcion: "Programa de entretención interactivo de cumbias y rancheras conducido por el Charro Incognito.",
        bgFrom: "from-green-700",
        bgTo: "to-blue-600",
        colorTexto: "text-white",
    },
    "El long play de los recuerdos": {
        titulo: "El Long Play de los Recuerdos",
        descripcion: "Exitos del ayer de la década de los 50s 60s 70s y 80s conducido por Marcela Berrios.",
        bgFrom: "from-indigo-700",
        bgTo: "to-fuchsia-700",
        colorTexto: "text-white",
    },
    "A 120 Por Hora": {
        titulo: "A 120 Por Hora",
        descripcion: "Programa de entretención interactivo con música diversa conducido por DJ Chamorro.",
        bgFrom: "from-blue-600",
        bgTo: "to-emerald-500",
        colorTexto: "text-white",
    },
    "Programa Evangelista": {
        titulo: "Programa Evangelista",
        descripcion: "Programa evangelico y pentecostal.",
        bgFrom: "from-sky-600",
        bgTo: "to-indigo-700",
        colorTexto: "text-white",
    },
    "El Bailable 106.1" : {
        titulo: "El Bailable 106.1",
        descripcion: "Musica bailable con DJ Chamorro.",
        bgFrom: "from-violet-800",
        bgTo: "to-cyan-800",
        colorTexto: "text-white",
    },
    "Domingo en Golondrina": {
        titulo: "Domingo en Golondrina",
        descripcion: "Música conversación y entretencion con DJ Chamorro.",
        bgFrom: "from-green-600",
        bgTo: "to-cyan-700",
        colorTexto: "text-white",
    },
    "Grandes Recuerdos en Golondrina": {
        titulo: "Grandes Recuerdos en Golondrina",
        descripcion: "Musica del ayer.",
        bgFrom: "from-yellow-700",
        bgTo: "to-red-700",
        colorTexto: "text-white",
    }
    
};

const horario = [
    [ // Lunes
        {
            programa: programas["Paine Crecemos Juntos"],
            hora: "08:30",
            termino: "10:00",
        },
        {
            programa: programas["La mañana cristalina"],
            hora: "10:00",
            termino: "13:00",
        },
        {
            programa: programas["Musica de los 80's"],
            hora: "13:00",
            termino: "14:00",
        },
        {
            programa: programas["La nueva fiesta del charro"],
            hora: "14:00",
            termino: "18:00",
        },
        {
            programa: programas["El long play de los recuerdos"],
            hora: "18:00",
            termino: "21:00",
        },
        {
            programa: programas["A 120 Por Hora"],
            hora: "21:00",
            termino: "24:00",
        },
    ],
    [ // Martes
        {
            programa: programas["Paine Crecemos Juntos"],
            hora: "08:30",
            termino: "10:00",
        },
        {
            programa: programas["La mañana cristalina"],
            hora: "10:00",
            termino: "13:00",
        },
        {
            programa: programas["Musica de los 80's"],
            hora: "13:00",
            termino: "14:00",
        },
        {
            programa: programas["La nueva fiesta del charro"],
            hora: "14:00",
            termino: "18:00",
        },
        {
            programa: programas["El long play de los recuerdos"],
            hora: "18:00",
            termino: "21:00",
        },
        {
            programa: programas["A 120 Por Hora"],
            hora: "21:00",
            termino: "24:00",
        },
    ],
    [ // Miercoles
        {
            programa: programas["Paine Crecemos Juntos"],
            hora: "08:30",
            termino: "10:00",
        },
        {
            programa: programas["La mañana cristalina"],
            hora: "10:00",
            termino: "13:00",
        },
        {
            programa: programas["Musica de los 80's"],
            hora: "13:00",
            termino: "14:00",
        },
        {
            programa: programas["La nueva fiesta del charro"],
            hora: "14:00",
            termino: "18:00",
        },
        {
            programa: programas["El long play de los recuerdos"],
            hora: "18:00",
            termino: "21:00",
        },
        {
            programa: programas["A 120 Por Hora"],
            hora: "21:00",
            termino: "24:00",
        },
    ],
    [ // Jueves
        {
            programa: programas["Paine Crecemos Juntos"],
            hora: "08:30",
            termino: "10:00",
        },
        {
            programa: programas["La mañana cristalina"],
            hora: "10:00",
            termino: "13:00",
        },
        {
            programa: programas["Musica de los 80's"],
            hora: "13:00",
            termino: "14:00",
        },
        {
            programa: programas["La nueva fiesta del charro"],
            hora: "14:00",
            termino: "18:00",
        },
        {
            programa: programas["El long play de los recuerdos"],
            hora: "18:00",
            termino: "21:00",
        },
        {
            programa: programas["A 120 Por Hora"],
            hora: "21:00",
            termino: "24:00",
        },
    ],
    [ // Viernes
        {
            programa: programas["Paine Crecemos Juntos"],
            hora: "08:30",
            termino: "10:00",
        },
        {
            programa: programas["La mañana cristalina"],
            hora: "10:00",
            termino: "13:00",
        },
        {
            programa: programas["Musica de los 80's"],
            hora: "13:00",
            termino: "14:00",
        },
        {
            programa: programas["La nueva fiesta del charro"],
            hora: "14:00",
            termino: "18:00",
        },
        {
            programa: programas["El long play de los recuerdos"],
            hora: "18:00",
            termino: "21:00",
        },
        {
            programa: programas["El Bailable 106.1"],
            hora: "22:00",
            termino: "24:00",
        },
    ],
    [ // Sabado
        {
            programa: programas["Programa Evangelista"],
            hora: "10:00",
            termino: "11:00",
        },
        {
            programa: programas["El Bailable 106.1"],
            hora: "22:00",
            termino: "24:00",
        },
    ],
    [ // Domingo
        {
            programa: programas["Domingo en Golondrina"],
            hora: "11:00",
            termino: "13:30",
        },
        {
            programa: programas["Grandes Recuerdos en Golondrina"],
            hora: "18:00",
            termino: "24:00",
        }
    ], // Programacion Regular
    [
        {
            programa: programas["Programacion Regular"],
            hora: "00:00",
            termino: "00:00",
        }
    ]
];

function GetHorario(): InterfaceHorario {
    //calcular el tamaño del bloque y la hora como Int

    return horario.map((dia, indexDia) => {
        return dia.map( programa => { //bloque
            let dia = dias[indexDia];
            let horaMinutos = HoraAMinutos(programa.hora);
            let terminoMinutos = HoraAMinutos(programa.termino);
            let duracionMinutos = terminoMinutos - horaMinutos;
            return {
                ...programa,
                dia,
                horaMinutos,
                terminoMinutos,
                duracionMinutos,
            }
        });
    });
}

function ProgramaActual(): InterfaceProgramaActual {

    const horario = GetHorario();


    //return random
    /*
    return {
        programaDefault: false,

        //bloque random
        bloque: horario[Math.floor(Math.random() * horario.length)][Math.floor(Math.random() * horario[0].length)],
        minutosRestantes: 1,
    }
    */


    const fecha = new Date();
    const diaOriginal = fecha.getDay();
    const dia = diaOriginal === 0 ? 6 : diaOriginal - 1;

    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    const totalMinutos = hora * 60 + minutos;

    for (const bloque of horario[dia]) {
        if(bloque.horaMinutos <= totalMinutos && bloque.horaMinutos + (bloque.duracionMinutos) > totalMinutos) {
            return {programaDefault: false, bloque: bloque, minutosRestantes: bloque.terminoMinutos - totalMinutos};
        }
    }

    return GetProgramaDefault();
}

function GetProgramaDefault(): InterfaceProgramaActual {
    const horario = GetHorario();

    return {
        programaDefault: true,
        bloque: horario[horario.length - 1][0],
        minutosRestantes: 1,
    };
}

const exported = {
    ProgramaActual,
    GetHorario,
    GetProgramaDefault,
};

export default exported;