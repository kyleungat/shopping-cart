import React, {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CartTable from '../components/CartTable'
import Calculation from '../components/Calculation'
import Shipment from '../components/Shipment'

function Step1({callback}) {

    const products = useSelector(state => state.cart.cart);
    const shipment = useSelector(state => state.cart.shipment);

    const handleNext = useCallback(
        () => {
            // callback(2);
        },
        [],
    )

    return (
        <>
            {products.length !== 0? 
            <>
            <CartTable products={products} shipment={shipment}/>
            <section className="cs-container">
                <Shipment shipment={shipment}/>
                <Calculation />
                <button className="btn" onClick={handleNext}>next</button>
            </section>
            </>
             : 
             <div className="empty-cart">
                <h2>Shopping cart is empty.</h2>
                <Link to="/">back</Link>
             </div>}
        </>
    )
}

export default Step1
