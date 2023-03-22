import { url } from "inspector";
import { useEffect, useState } from "react";

interface Props {
    url: string;
}

function Instagram(props: Props) {


    return(
        <iframe
            title="Instagram"
            className="rounded-sm shadow-xl overflow-hidden h-96 w-72 lg:w-[385px] lg:h-[420px] 2xl:h-[535px] 2xl:w-[500px]"
            src={props.url}
            scrolling="no"
            >
        </iframe>
    );

}

export default Instagram;