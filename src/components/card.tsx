import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Img, { FixedObject } from 'gatsby-image';

const Category = styled.div({
    width: "100%",
    backgroundColor: "cadetblue",
    fontSize: 18,
    textAlign: "center",
    marginRight: "auto",
    color: "#FFF",
    fontFamily: "Vollkorn , serif",
    padding: 5,
})

const Title = styled.div({
    padding: 5,
    fontSize: 16,
    color:"#000"
})

const Image = styled.div({
    height: "calc(100% - 110px)",
    width: "100%",
    textAlign: "center",
    div: {
        maxHeight: "100%"
    }
})

const linkCss = css({
    textDecoration: "none",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow:"hidden",
    "&:active": {
        color: "inherit"
    }
})

const Body = styled.div({
    width: 280,
    height: 320,
    textDecoration: "none",
    marginRight: 80,
    borderRadius: 5,
    backgroundColor: "#FFF",
    transitionDuration: "0.2s",
    "&:hover": {
        boxShadow: "1px 1px 6px gray",
    }
})

interface ICardProps {
    blogTitle: string,
    link: string,
    fixed: FixedObject,
    category: string
}

const Card: React.FC<ICardProps> = (props) => {
    return (
        <Body>
            <Link css={linkCss} to={props.link}>
                <Category>{props.category}</Category>
                <Image>
                    <Img fixed={props.fixed} />
                </Image>
                <Title>{props.blogTitle}</Title>
            </Link>
        </Body>
    )
}

export default Card;