import React from 'react';

import Navbar from './navbar/Navbar'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;