import * as React from 'react';
import Header from "../components/header";
import Body from "../components/body";
import Footer from './footer';

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