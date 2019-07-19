import React, { Fragment } from 'react'
import Menu from './Menu';

function Layout (props) {

    const { children } = props;

    return (
        <Fragment>
            <Menu />
            <div>
                { children }
            </div>
        </Fragment>
    )
}

export default Layout