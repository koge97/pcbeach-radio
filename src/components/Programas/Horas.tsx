

function Horas() {
    let inicio = 8;
    let horas = 24 - inicio;
    let horasArray = Array.from(Array(horas).keys());
    return (
        <div className='hidden -mt-1 -mb-5 xl:block text-center ' >
            {horasArray.map(hora => {
                return ( 
                    <div key={hora} className="mr-1.5">
                        <div className="h-20 flex">
                            <p className="my-auto w-full">{hora + inicio}:00</p>
                        </div>
                        <div className="h-20 flex">
                            <p className="my-auto w-full">{hora + inicio}:30</p>
                        </div>
                    </div>
                );
            })}
            <div className="mr-1.5">
                <div className="h-20 flex -mb-5">
                    <p className="my-auto w-full">24:00</p>
                </div>
            </div>
        </div>
    );
}

export default Horas;