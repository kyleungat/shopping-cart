import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function LittleCartBox() {

    const cart = useSelector(state => state.cart.cart);

    console.log(cart);

    return (
        <div className="little-cart-box">
            {cart.length !== 0 ? cart.map((element) => {
                const { id, name, price, seller, photo } = element;
                return (
                    <Link key={id} to={`/product/${id}`}>
                    <div className="cart-box-item">
                        <img src={photo} alt={name}/>
                        <span className="name">{name}</span>
                        <span className="seller">{seller}</span>
                        <span className="price">{`${price.unit} ${price.value}`}</span>
                    </div>
                    </Link>
                )
            }) :
                <p className="msg">no items in cart</p>
            }
        </div>
    )
}

export default LittleCartBox
