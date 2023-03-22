import Head from 'next/head';
import { useState, useEffect } from "react";


import Programacion from '@/utils/programacion';

import NavBar from '@/components/Navbar';
import Nosotros from '@/components/Nosotros';
import Programas from '@/components/Programas';
import Facebook from '@/components/Facebook';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import Reproductor from '@/components/Reproductor';

export default function Home() {
    const [programaActual,setProgramaActual] = useState(Programacion.ProgramaActual());
    const programaDefault = Programacion.GetProgramaDefault();
    const horario = Programacion.GetHorario();
  
    useEffect(() => {
      const intervaloRecarga = setTimeout(() => {
        console.log("Recargando...");
        setProgramaActual(Programacion.ProgramaActual());
      }, 60000 * (programaActual.minutosRestantes + 1));
      return () => clearTimeout(intervaloRecarga);
    }, [programaActual]);

    return (
        <>
        <Head>
            <title>Radio Golondrina</title>
            <meta charSet="utf-8" />
            <meta
                name="description"
                content="Radio Golondrina Paine 106.1 FM, Te Acompaña!"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            {/* <meta name="theme-color" content="#0f172a" /> */}
            
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/maskicon.svg" color="#60a5fa" />
            <meta name="msapplication-TileColor" content="#60a5fa" />
            
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#60a5fa" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1D4ED8" />
        </Head>

        <div className='dark:text-white text-slate-800'>
            <NavBar />
            <main className='transition-all'>
                <section id="inicio"></section>
                <Nosotros />
                <Programas horario={horario} />
                <Facebook />
                <Contacto />
            </main>
            <Footer />
            <Reproductor programaActual={programaActual} programaDefault={programaDefault} />
        </div>

        </>
    )
}
