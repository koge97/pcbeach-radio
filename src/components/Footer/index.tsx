import Logo from '../Logo';

import Image from 'next/image';

import logoSubtel from '@/assets/LogoSubtel.png';

function Footer() {
    return (
        <footer className="footer p-4 text-neutral-content bg-zinc-100 dark:bg-black flex flex-col lg:flex-row justify-evenly items-center">
            <div className='w-full max-w-md justify-center items-center space-y-6'>
                <div className="font-sans justify-center text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-orange-600 to-purple-600">
                    <h2 className='text-2xl'>Radio Golondrina 106.1 FM</h2>
                    <h3 className='text-xl'>Te Acompaña!</h3>
                </div>
                <Logo className="w-auto mx-auto max-h-52 fill-gray-800 dark:fill-gray-300" />
            </div>
            <div className='w-full max-w-md flex flex-col items-center text-center space-y-6'>
                <p className='text-base text-slate-600 dark:text-slate-200'>
                    Radio Golondrina es una marca registrada de la asociacion cultural y deportiva Cristalina.
                </p>
                <Image
                    src={logoSubtel}
                    alt="Subsecretaría de Teleecomunicaciones"
                    className="w-auto max-h-52"
                />
            </div>
        </footer>
    );
}

export default Footer;