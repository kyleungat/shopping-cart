import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

function Calculation() {

        const cart = useSelector(state => state.cart.cart);
        const info = useSelector(state => state.cart.info);

        const totalNumber = useMemo(() => (
                cart.reduce((accumlator, currentValue) => {
                        return accumlator + currentValue.quantity;
                }, 0)
        ), [cart]);

        const totalPrice = useMemo(() => (
                cart.reduce((accumlator, currentValue) => {
                        return accumlator + currentValue.price.value * currentValue.quantity;
                }, 0)
        ), [cart]);

        const total = useMemo(() => (
                (totalPrice + totalPrice*(info.tax? info.tax:0)/100 ) * (1- (info.discount? info.discount:0)/100)
        ), [info, totalPrice])

        
        return (
                <div className="container">
                        <h2>Info</h2>
                        <div className="items">
                                <span>quantity</span>
                                <span>{totalNumber}</span>
                        </div>
                        <div className="items">
                                <span>price</span>
                                <span>USD {totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="items">
                                <span>tax</span>
                                <span>{info.tax? info.tax: 0} %</span>
                        </div>
                        <div className="items">
                                <span>discount</span>
                                <span>{info.discount? info.discount: 0} %</span>
                        </div>
                        <div className="items">
                                <span>total</span>
                                <span>USD {total.toFixed(2)}</span>
                        </div>
                </div>
        )
}

export default Calculation
