import { useEffect, useState } from "react";

function Frame(){

    const minWidth = 30;
    const maxWidth = 500;

    const minHeight = 500;
    const maxHeight = 650;

    const xMargin = 100;

    const [width, setWidth] = useState(minWidth);
    const [height, setHeight] = useState(minHeight);

    useEffect(() => {
        function resize() {
            const windowWidth = window.innerWidth;
            
            const width = windowWidth - xMargin;
            
            if(width < minWidth){
                setWidth(minWidth);
            } else if(width > maxWidth){
                setWidth(maxWidth);
            } else {
                setWidth(width);
            }

            const height = (windowWidth >= 1024) ? maxHeight : minHeight;
            setHeight(height);
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);
    
    return(
        <iframe 
                title="Facebook"
                className="rounded-sm shadow-xl overflow-hidden mx-auto my-4"
                style={{height: height, width: width}}
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRadio-Golondrina-Paine-1475870435852133%2F&tabs=timeline&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=200574404670312`} 
                width={width} 
                height={height}
                scrolling="no" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >
            
        </iframe>
    );
}

export default Frame;