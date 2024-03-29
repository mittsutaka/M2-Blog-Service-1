import * as React from "react";
import styled from "@emotion/styled";

interface IFormBlockProps {
    name: string,
    type: string,
    label: string,
    id: string;
}

const FlexColumn = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    marginBottom: 20
})

const InputBox = styled.input({
    border: "1px solid darkgray",
    borderRadius: 5,
    backgroundColor: "#fff",
    lineHeight: 2,
    outline: "none",
    padding: "0 5px"
})

const FormTextArea = styled.textarea({
    border: "1px solid darkgray",
    borderRadius: 5,
    backgroundColor: "#fff",
    resize: "none",
    height: 150,
    outline: "none",
    padding: "0 5px"
})

const FormLabel = styled.label({
    fontFamily: "Vollkorn , serif",
    fontSize: 18,
})

const FormBlock = (props: IFormBlockProps) => {
    return (
        <FlexColumn>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <InputBox id={props.id} type={props.type} name={props.name}></InputBox>
        </FlexColumn>
    )
}

const SendButton = styled.button({
    backgroundColor: "#333",
    color: "#fff",
    padding: "5px 50px",
    borderRadius: 5
})

const Wrapper = styled.div({
    width:"50%",
    "@media (max-width: 800px)": {
        width:"100%"
    }
})

const Form = () => {
    return (
        <Wrapper id="contact">
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <FormBlock id="form_name" label="Name" type="text" name="name" />
                <FormBlock id="form_email" label="Email" type="email" name="email" />
                <FlexColumn>
                    <FormLabel htmlFor="form_message">Message</FormLabel>
                    <FormTextArea id="form_message" name="message"></FormTextArea>
                </FlexColumn>
                <SendButton type="submit">Send</SendButton>
            </form>
        </Wrapper>
    )
}

export default Form;