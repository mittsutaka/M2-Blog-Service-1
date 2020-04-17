import * as React from "react";
import styled from "@emotion/styled";

interface ILabelProps {
    labelName: string,
}

const Wrapper = styled.div({
    marginBottom: 5,
    borderBottom: "1px solid gray"
})

const LabelText = styled.label({
    fontSize: 24,
    fontFamily: "Vollkorn , serif",
})

const Label: React.FC<ILabelProps> = (props) => {
    return (
        <Wrapper>
            <LabelText>{props.labelName}</LabelText>
        </Wrapper>
    )
}

export default Label;