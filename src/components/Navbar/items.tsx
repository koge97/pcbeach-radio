const items = {
    "Inicio": "#inicio",
    "Nosotros": "#nosotros",
    "Programación": "#programas",
    "Facebook": "#facebook",
    "Contacto": "#contacto"
}

export default function NavBarItems() {
    return (
        <ul className="menu lg:menu-horizontal flex flex-col lg:flex-row my-2 mx-6 lg:m-0 lg:h-full space-y-6 lg:space-y-0 lg:space-x-2 ">
            {Object.entries(items).map(([key, value]) => {
                return (
                    <li className="lg:w-26 h-12 lg:h-8" key={value}>
                        <a href={value} className="w-full ">
                            <span className="text-lg font-semibold">{ key }</span>
                        </a>
                    </li>
                )
            })}
        </ul>
    );
}