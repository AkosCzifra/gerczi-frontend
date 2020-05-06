import React from 'react';

import Nav from './navbar/Nav'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Nav />
            <main>
                {props.children}
            </main>
            <h1>Footer</h1>
        </React.Fragment>
    )
}

export default Layout;