

import { ChangeEvent, useEffect, useState } from 'react';
import InterfaceBloque from '../../interfaces/InterfaceBloque';

import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import { GoMute, GoUnmute } from 'react-icons/go';

interface BloqueProgramatico {
    programaDefault: boolean;
    bloque: InterfaceBloque;
    minutosRestantes: number;
}

interface ReproductorProps {
    programaActual: BloqueProgramatico;
    programaDefault: BloqueProgramatico;
}

const url = 'https://player.radiogolondrina.cl:8443/radiogolondrina';

let audio: HTMLAudioElement;

if(typeof window !== 'undefined') {
    audio = new Audio(url);
}

function Reproductor(Props: ReproductorProps) {
    const [paused, setPaused] = useState(true);
    const [loading, setLoading] = useState(false);
    const [volume, setVolume] = useState(0.5); 
    const [prevVolume, setPrevVolume] = useState(0.5);

    const programa = Props.programaActual.bloque.programa;


    function setMediaSessionAPI() {
        if('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: programa.titulo,
                artist: 'Radio Golondrina Paine',
                artwork: [
                    { src: '/artwork-1000x1000.png', sizes: '1000x1000', type: 'image/png' },
                    { src: '/artwork-512x512.png', sizes: '512x512', type: 'image/png' },
                    { src: '/artwork-384x384.png', sizes: '384x384', type: 'image/png' },
                    { src: '/artwork-256x256.png', sizes: '256x256', type: 'image/png' },
                    { src: '/artwork-192x192.png', sizes: '192x192', type: 'image/png' },
                    { src: '/artwork-128x128.png', sizes: '128x128', type: 'image/png' },
                    { src: '/artwork-96x96.png', sizes: '96x96', type: 'image/png' },
                ]
            });

            navigator.mediaSession.setActionHandler("play", () => {
                startPlaying();
            });
            navigator.mediaSession.setActionHandler("pause", () => {
                stopPlaying();
            });
            navigator.mediaSession.setActionHandler("stop", () => {
                stopPlaying();
            });

        }
    }

    useEffect(() => {
        setMediaSessionAPI();
    }, [Props.programaActual]);

    async function startPlaying() {
        setLoading(true);
        try {
            await audio.play();
        } catch (error: any) {
            if(error.code === 20) {
                console.log('El usuario pauso la reproduccion antes de que se cargara el audio.');
                return;
            }
            console.log({error});
        }
        changeVolume(volume);
        setMediaSessionAPI();
        setLoading(false);
        setPaused(false);
    }

    function stopPlaying() {
        audio.pause();
        audio = new Audio(url);
        setPaused(true);
        setLoading(false);
    }
    
    async function toggleAudio() {
        if(loading) { // el usuario esta spammeando el boton
            stopPlaying();
            startPlaying();
            return;
        }
        
        if (paused) {
            startPlaying();
        } else {
            stopPlaying();
        }
    }

    function changeVolume(volume: number) {
        audio.volume = volume;
        setVolume(volume);
    }

    function changeSlider(e: ChangeEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;
        const newVolume = Number(target.value) / 100;
        changeVolume(newVolume);
        //console.log(audio.volume);
    }

    function mute() {
        setPrevVolume(volume);
        audio.volume = 0;
        setVolume(0);
    }

    function unmute() {
        if(prevVolume === 0) {
            setPrevVolume(0.5);
        }
        audio.volume = prevVolume;
        setVolume(prevVolume);
    }

    function toggleMute() {
        if(audio.volume === 0) {
            unmute();
        } else {
            mute();
        }
    }


    return(
        <div>
            <div className='w-full h-52 lg:h-32 bg-zinc-100/80 dark:bg-black/80'>
            </div>
            <div className='fixed bottom-0 w-full p-2 h-52 lg:h-32  shadow-sm bg-zinc-100/80 dark:bg-black/80 backdrop-blur border-t border-slate-300/40 dark:border-slate-500/30'>
                <div className='h-full flex flex-col justify-center items-center space-y-2 lg:flex-row lg:justify-evenly lg:max-w-5xl lg:mx-auto lg:space-y-0'>
                    <div className='flex flex-col items-center space-y-2'>
                        <h3 className='text-xl font-bold'>Suena ahora en Golondrina FM</h3>
                        <h4 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-bl ${programa.bgFrom} ${programa.bgTo}`}>{programa.titulo}</h4>
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                        <button aria-label='Iniciar o detener la reproducción.' className={`btn border-white/30 hover:border-white/60 rounded-full w-12 h-12 flex justify-center text-white text-center items-center shadow-xl bg-gradient-to-tr ${programa.bgFrom} ${programa.bgTo}`} onClick={toggleAudio} >
                            {
                            loading ?
                                <ImSpinner2 className='h-8 w-8 animate-spin' />
                            :
                            paused ? 
                                <BsPlayFill className='h-12 w-12' /> 
                            : 
                                <BsPauseFill className='h-12 w-12' />
                            }
                        </button>
                        <div className='flex flex-row w-72 items-center'>
                            <button aria-label='Silenciar o activar sonido.' className={`btn btn-primary border-white/30 hover:border-white/60 min-h-8 w-8 h-8 p-0 text-center justify-center items-center bg-gradient-to-tr ${programa.bgFrom} ${programa.bgTo} text-white rounded-md shadow-xl`} onClick={toggleMute}>
                                {
                                    volume === 0 ?
                                        <GoMute className='mx-auto' />
                                    :
                                        <GoUnmute className='mx-auto' />
                                }
                            </button>
                            <div className="relative flex flex-col w-full h-3 rounded-full bg-white mx-5">
                                <span className={`absolute top-0 progress shadow-xl w-full h-3 bg-gradient-to-r ${programa.bgFrom} ${programa.bgTo}`} style={{width: `${volume * 100}%`}} ></span>
                                <span className="absolute top-0 bg-white h-6 w-6 -ml-4 -mt-1.5 shadow rounded-full border border-slate-800/20" style={{left: `${volume * 100}%` }}></span>
                                <input aria-label='Volumen.' type="range" min="0" max="100" value={volume * 100} className="absolute cursor-pointer top-0 opacity-0  progress w-full h-5" id="volume" onChange={changeSlider} />
                            </div>
                            <div className='w-8'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reproductor;