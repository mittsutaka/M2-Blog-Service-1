import * as React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div({
    padding: "5% 7%"
})

const Body: React.FC = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Body;