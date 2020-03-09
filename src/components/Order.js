import React from 'react'
import {useSelector } from 'react-redux'

function Order() {

    const cart = useSelector(state => state.cart.cart);
    const shipment = useSelector(state => state.cart.shipment);
    const info =  useSelector(state => state.cart.info);
    // const order = useSelector(state => state.cart.order);

    return (
        <>
            <h2>order</h2>
            <div className="items-container">
                <ul>

                </ul>
            </div>
            <div className="data-container">
                <ul>

                </ul>
            </div>
        </>
    )
}

export default Order
