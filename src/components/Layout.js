import React from 'react';

import NavBar from './navbar/NavBar'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;