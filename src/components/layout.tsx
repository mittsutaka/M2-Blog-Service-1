import * as React from 'react';
import Header from "../components/header";
import Footer from './footer';
import styled from "@emotion/styled";
import SEO from "./seo";

const Body = styled.main({
    margin: "4% 5%",
})

interface ILayoutProps {
    children: React.ReactNode,
    title?: string,
    desc?: string,
    article?: boolean,
    banner?: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title, desc, article, banner }) => {
    return (
        <div>
            <SEO title={title} desc={desc} article={article} banner={banner} />
            <Header />
            <Body>
                {children}
            </Body>
            <Footer />
        </div>
    )
}

export default Layout;