import * as React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const Wrapper = styled.header({
    backgroundColor: "#2E326A",
    padding: 5,
    color: "#FFFFFF",
    height: 60,
    display: "flex",
    alignItems: "center"
})

const SiteName = styled.div({
    paddingLeft: 5,
    fontSize: 32,
    fontFamily: "serif",
    a:{
        color:"#FFFFFF",
        textDecoration:"none"
    }
})

const SiteDescription = styled.div({
    padding: "5px 20px",
    marginTop: "auto"
})

const Header = () => {
    return (
        <Wrapper>
            <SiteName>
                <Link to="/">
                    m2-Gaming
                </Link>
            </SiteName>
            <SiteDescription>
                ～（サイト作成中）30歳プログラマ歴2年の趣味サイト～
            </SiteDescription>
        </Wrapper>
    )
}

export default Header;