import React from 'react'
import Product from './Product'
import {useSelector} from 'react-redux'

function ProductList() {

    const products = useSelector(state => state.products);

    return (
        <section className="product-list">
            { products && products.map((element,index) => (
                <Product key={element.id} product={element} />
            ))}
        </section>
    )
}

export default ProductList
