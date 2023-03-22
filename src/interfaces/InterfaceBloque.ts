import InterfacePrograma from "./InterfacePrograma";

export default interface InterfaceBloque {
    programa: InterfacePrograma;
    dia: string;
    hora: string;
    horaMinutos: number;
    termino: string;
    terminoMinutos: number;
    duracionMinutos: number;
}