import * as React from "react";
import { Adsense } from "@ctrl/react-adsense";
import styled from "@emotion/styled";

const GoogleAdsense = () => {
    return (
        <div>
            <Adsense
                client='ca-pub-7472499184442554'
                slot='1195893957'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
        </div>
    )
}

export default GoogleAdsense;