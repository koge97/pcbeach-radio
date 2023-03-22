function LineasDivisoras() {
    const bloques = (24-8) * 1;
    return(
        <div className="-mt-2 hidden xl:block">
            <div className='border-b border-gray-800/20 dark:border-gray-300/20'></div>
            {Array.from(Array(bloques).keys()).map(bloque => {
                return(
                    <div key={bloque} className='mt-[159px] border-b border-gray-800/20 dark:border-gray-300/20'></div>
                );
            })}
        </div>
    );
}

export default LineasDivisoras;