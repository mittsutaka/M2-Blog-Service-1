import * as React from 'react';
import Header from "../components/header";
import Footer from './footer';
import styled from "@emotion/styled";

const Body = styled.main({
    margin: "4% 5%",
})

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <Body>
                {children}
            </Body>
            <Footer />
        </div>
    )
}

export default Layout;