import React from 'react'
import QuantityController from './QuantityController'
import {useDispatch} from 'react-redux'
import {remove} from '../redux/cartAction'
import { Link } from 'react-router-dom'

const shipmentText = ["normal", "fast", "self pick"];

function CartTable({products, shipment}) {

    const dispatch = useDispatch();

    return (
        <table className="cart-table">
            <thead>
            <tr>
                <th>product</th>
                <th className="w-30">name</th>
                <th>price</th>
                <th>quantity</th>
                <th>shipment</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            {products.map((element,index) => {
                const {id, name, price, photo, quantity } = element
                return (
                    <tr key={id}>
                        <td><img src={photo} alt={name}/></td>
                        <td><Link key={id} to={`/product/${id}`}><span>{name}</span></Link></td>
                        <td><span>{`$${price.value} ${price.unit}`}</span></td>
                        <td><QuantityController quantity={quantity} id={id}/></td>
                        <td><span>{shipmentText[shipment]}</span></td>
                        <td><button id="remove" onClick={() => { dispatch(remove(id)) }}><i className="fas fa-trash-alt"></i></button></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default CartTable
