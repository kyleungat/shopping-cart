import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartAction'
import { Link } from 'react-router-dom'

function Product({ product }) {
    const { id, name, price, photo, inCart } = product;

    const dispatch = useDispatch();

    return (
        <article className="product-card">
            <div className="overlay">
                {inCart ?
                    <button style={{ transform: "translateX(0)" }}>in cart</button>
                    :
                    <button onClick={() => {
                        dispatch(addProduct(product));
                    }}>add to cart</button>
                }
                <Link to={`/product/${id}`}><img src={photo} alt={name}/></Link>
            </div>
            <h3>{name}</h3>
            <h4>{`$${price.value} ${price.unit}`}</h4>
        </article>
    )
}

export default Product
