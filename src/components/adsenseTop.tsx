import * as React from "react";
import { Adsense } from "@ctrl/react-adsense";

const AdsenseTop = () => {
    return (
        <div>
            <Adsense
                client='ca-pub-7472499184442554'
                slot='4746118544'
                style= "display: 'block',text-align:'center'"
                format='flued'
                layout="in-article"
            />
        </div>
    )
}

export default AdsenseTop;