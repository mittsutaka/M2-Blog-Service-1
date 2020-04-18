import * as React from "react";
import styled from "@emotion/styled";

interface IFormBlockProps {
    name: string,
    type: string,
    label: string,
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
    fontSize: 18
})

const FormBlock = (props: IFormBlockProps) => {
    return (
        <FlexColumn>
            <FormLabel>{props.label}</FormLabel>
            <InputBox type={props.type} name={props.name}></InputBox>
        </FlexColumn>
    )
}

const SendButton = styled.button({
    backgroundColor: "darkcyan",
    color: "#fff",
    padding: "5px 50px",
    borderRadius: 5
})

const Form = () => {
    return (
        <div>
            {/* <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"> */}
            <form name="contact" method="POST" data-netlify="true">
                {/* <input type="hidden" name="form-name" value="contact" /> */}
                {/* <input type="hidden" name="bot-field" /> */}
                <FormBlock label="Name" type="text" name="name" />
                <FormBlock label="Email" type="email" name="email" />
                <FlexColumn>
                    <FormLabel>Message</FormLabel>
                    <FormTextArea name="message"></FormTextArea>
                </FlexColumn>
                <SendButton type="submit">Send</SendButton>
            </form>
        </div>
    )
}

export default Form;