import * as React from "react";
import { Adsense } from "@ctrl/react-adsense";

const AdsenseBottom = () => {
    return (
        <div>
            <Adsense
                client='ca-pub-7472499184442554'
                slot='1195893957'
                style={{ display: 'block', textAlign: 'center' }}
                format='auto'
                responsive='true'
            />
        </div>
    )
}

export default AdsenseBottom;