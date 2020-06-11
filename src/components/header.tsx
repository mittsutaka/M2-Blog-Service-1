import * as React from 'react';
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Wrapper = styled.header({
    backgroundColor: "#2E326A",
    padding: 20,
    color: "#FFFFFF",
    height: "auto",
    display: "flex",
    alignItems: "center",
    fontFamily: "Vollkorn , serif",
    "@media (max-width: 800px)": {
        flexDirection: "column"
    }
})

const SiteName = styled.div({
    paddingLeft: 5,
    fontSize: 32,

    a: {
        color: "#FFFFFF",
        textDecoration: "none"
    },
    "@media (max-width: 800px)": {
        fontSize: 24
    }
})

const SiteDescription = styled.div({
    padding: "5px 20px",
    marginTop: "auto",
    "@media (max-width: 600px)": {
        fontSize: 12
    }
})

const SideMenuWrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    margin: "auto auto 0 auto",
})

const MenuLink = styled.a({
    margin: "0 30px",
    color:"#fff",
    textDecoration:"none",
    "&:hover":{
        color:"thistle"
    }
})

const SideMenu = () => {
    return (
        <SideMenuWrapper>
            <MenuLink href="#category">Category</MenuLink>
            <MenuLink href="#contact">Contact</MenuLink>
            <MenuLink href="#about">About</MenuLink>
        </SideMenuWrapper>
    )
}

const Header = () => {
    return (
        <Wrapper>
            <SiteName>
                <Link to="/">
                    m2-Gaming
                </Link>
            </SiteName>
            <SiteDescription>
                ～30歳プログラマ歴2年の趣味サイト～
            </SiteDescription>
            <SideMenu />
        </Wrapper>
    )
}

export default Header;