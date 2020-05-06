import React from 'react';

import Nav from './navbar/Nav'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Nav />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;