import { url } from "inspector";
import { useEffect, useState } from "react";

interface Props {
    url: string;
}

function Instagram(props: Props) {

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
            title="Instagram"
            className="rounded-sm shadow-xl overflow-hidden mx-auto my-4"
            style={{height: 535, width: width}}
            src={props.url}
            width={width} 
            height={height}
            scrolling="no"
            >
        </iframe>
    );

}

export default Instagram;