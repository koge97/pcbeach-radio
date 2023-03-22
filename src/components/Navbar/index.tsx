import { useEffect, useState } from "react";

import Image from 'next/image';

import NavBarItems from "./items";

import { toggleTheme, isDarkTheme } from "@/utils/theme";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";

function NavBar() {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [isMobile, setIsMobile ] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setDarkTheme(isDarkTheme());
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [darkTheme, isMobile]);

    function onClickToggleTheme() {
        toggleTheme();
        setDarkTheme(isDarkTheme());
    }

    function toggleMenu() {
        setOpen(!open);
    }

    function handleResize() {
        if(window.innerWidth <= 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    return (
        <nav className="">
            <div className="navbar bg-white dark:bg-zinc-900"></div>
            <div className="fixed z-50 top-0 left-0 right-0 bg-base-100/80 dark:bg-black/70 backdrop-blur shadow-xl border-b border-slate-100/90 dark:border-stone-900/90">
                <div className="navbar">
                    <div className="flex flex-row px-2 w-full">
                        <div className="flex-1 flex flex-row space-x-4 items-center">
                            <button className={`btn btn-ghost rounded-btn ${isMobile ? '' : 'hidden'} swap swap-rotate `} aria-label='Cerrar o abrir menú de navegación.' onClick={toggleMenu}>
                                <GiHamburgerMenu className={`h-6 lg:h-8 w-auto ${open ? 'swap-on' : 'swap-off' }` } />
                                <TfiClose className={`h-6 lg:h-8 w-auto ${open ? 'swap-off' : 'swap-on' }`} />
                            </button>
                            <a href="#inicio" className="flex space-x-3">
                                <p className="my-auto font-offroad italic text-4xl sm:text-4xl " >
                                    PCbeach.cl
                                </p>
                            </a>
                        </div>
                        <div className="flex-none flex">
                            <div className={`${isMobile ? 'hidden' : ''}`}>
                                <NavBarItems />
                            </div>
                            <button className="btn btn-ghost rounded-btn my-auto swap swap-rotate" aria-label="Cambiar tema oscuro o claro." onClick={onClickToggleTheme}>
                                <MdLightMode className={`h-6 sm:h-8 w-auto ${ darkTheme ? 'swap-on' : 'swap-off'}`} />
                                <MdDarkMode className={`h-6 sm:h-8 w-auto ${darkTheme ? 'swap-off' : 'swap-on'}`} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`w-full transition-all  ${open && isMobile ? 'h-screen ' : 'h-0 overflow-hidden'} `}  onClick={() => {setOpen(false)}}  >
                    <NavBarItems />
                </div>
            </div>
        </nav>
    );

}

export default NavBar;