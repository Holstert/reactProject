import React from 'react'
import { Link } from 'react-router-dom'

function Menu () {
    return (
        <nav id='menu'>
            <Link to='/'> Home </Link>
            <Link to='/CartPage'> Cart </Link>
        </nav>
    ) 
}

export default Menu