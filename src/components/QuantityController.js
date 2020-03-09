import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement} from '../redux/cartAction'

function QuantityController({ quantity, id }) {

    const dispatch = useDispatch();

    return (
        <>
            <button className="controller-btn" onClick={() => { if (quantity > 1) dispatch(decrement(id)) }}><i className="fas fa-minus"></i></button>
            <span style={{color: "#c028fc"}}>{quantity}</span>
            <button className="controller-btn" onClick={() => { dispatch(increment(id)) }}><i className="fas fa-plus"></i></button>
        </>
    )
}

export default QuantityController
