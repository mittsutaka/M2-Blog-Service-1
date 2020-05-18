import * as React from "react";
import styled from "@emotion/styled";
import About from "../components/about";
import Form from "../components/form";

const Wrapper = styled.footer({
    backgroundColor: "#646464",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    color:"#fff",
    padding:"20px 30px"
})

const Footer = () => {
    return (
        <Wrapper>
            <About />
            <Form />
        </Wrapper>
    )
}

export default Footer;