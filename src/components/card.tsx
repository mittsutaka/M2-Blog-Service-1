import * as React from "react";
import styled from "@emotion/styled";

const Category = styled.div({
    borderRadius: "24px",
    width: 64,
    backgroundColor: "#F6FF74",
    padding: 5,
    fontSize: 14,
    textAlign: "center",
    marginRight: "auto"
})

const Title = styled.div({
    padding: 5,
    fontSize: 20,
})

const Image = styled.div({
    height: "calc(100% - 106px)",
    marginTop:"auto",
    img: {
        maxHeight: "100%"
    }
})

const Body = styled.div({
    width: 280,
    height: 320,
    boxShadow: "2px 2px 4px gray",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    marginRight: 80
})

interface ICardProps {
    blogTitle: string
}

const Card: React.FC<ICardProps> = (props) => {
    return (
        <Body>
            <Category>PUBG</Category>
            <Title>{props.blogTitle}</Title>
            <Image>
                <img src="/static/4a9773549091c227cd2eb82ccd9c5e3a/gatsby-icon.png" />
            </Image>
        </Body>
    )
}

export default Card;