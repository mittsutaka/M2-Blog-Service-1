import * as React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div({
    padding: "50px 100px"
})

const Body: React.FC = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Body;