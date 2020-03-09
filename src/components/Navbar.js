import React from 'react'
import {NavLink} from 'react-router-dom'

const customStyling = {
    fontWeight: "bold",
    color: "#c028fc",
}

function Navbar() {
    return (
        <nav>
            <h1>Shopping Cart</h1>
            <ul>
                <li><NavLink to="/" activeStyle={customStyling} exact>home</NavLink></li>
                <li><NavLink to="/shopping-cart" activeStyle={customStyling}>Shopping cart</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
