import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import {addProduct} from '../redux/cartAction'

function ProductPage() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const match = useRouteMatch();
    const matchedId = parseInt(match.params.id);

    const product = products.find(element => element.id === matchedId);
    const { name, seller, price, photo, inCart } = product;

    return (
        <section className="product-page">
            <h2>{name}</h2>
            <article className="container">
                <div className="img-container">
                    <img src={photo} alt={name}/>
                </div>
                <div className="data-container">
                    <p><span><strong>Seller: </strong></span><span>{seller}</span></p>
                    <p><span><strong>Price: </strong></span><span>{`${price.unit} ${price.value}`}</span></p>
                    <button onClick={() => { if(!inCart) dispatch(addProduct(product)) }}>{inCart? "in cart" : "add to cart"}</button>
                </div>
            </article>
        </section>
    )
}

export default ProductPage
