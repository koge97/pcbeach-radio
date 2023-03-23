import CardContacto from "./CardContacto";

import { 
    FaFacebookF,
    FaEnvelope,
    FaWhatsapp,
} from "react-icons/fa";

import { BsFillTelephoneFill } from "react-icons/bs";

const contactos = [
    {
        icono: FaFacebookF,
        iconoBackground: "bg-[#4267B2]",
        titulo: "Facebook",
        descripcion: "Síguenos en Facebook",
        direccion: "PCBeach Centro Tecnologico",
        href: "https://facebook.com/people/PCBeach-Centro-Tecnol%C3%B3gico/100061811122209/",
        accion: "Síguenos",
    },
    {
        icono: FaEnvelope,
        iconoBackground: "bg-[#D44638]",
        titulo: "Correo",
        descripcion: "Escríbenos a nuestro correo",
        direccion: "contacto@pcbeach.cl",
        href: "mailto:contacto@pcbeach.cl",
        accion: "Escríbenos",
    },
    {
        icono: BsFillTelephoneFill,
        iconoBackground: "bg-blue-600",
        titulo: "Teléfono",
        descripcion: "Llámanos a nuestro teléfono",
        direccion: "+56 9 7400 7400",
        href: "tel:+56974007400",
        accion: "Llámanos",
    },
    {
        icono: FaWhatsapp,
        iconoBackground: "bg-[#25D366]",
        titulo: "Whatsapp",
        descripcion: "Envíanos un mensaje por Whatsapp",
        direccion: "+56 9 7400 7400",
        href: "https://api.whatsapp.com/send?phone=56974007400",
        accion: "Escríbenos",
    }

];

function Contacto() {
    return (
        <section id="contacto" className='bg-white dark:bg-zinc-800 py-16 px-6 p-4 items-center'>
            <div className="text-center pb-4 space-y-6">
                <h1 className='text-5xl font-bold'>
                    Comunícate con nosotros
                </h1>
                <h2 className="text-lg font-semiboldbold ">
                    Déjanos tus sugerencias o comentarios.
                </h2>
            </div>
            <div className="flex flex-wrap items-center justify-around ">
                {contactos.map((contacto, index) => {
                    return (
                        <CardContacto key={index} {...contacto} />
                    );
                })}
            </div>
        </section>
    );
}

export default Contacto;