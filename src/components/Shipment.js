import React from 'react'
import {useDispatch} from 'react-redux'
import { changeShipment } from '../redux/cartAction';

function Shipment({shipment}) {

    const dispatch = useDispatch();

    return (
        <div className="container">
            <h2>Shipment</h2>
            <form>
                <ul>
                    <li>
                        <input type="radio" value="normal" name="shipment" id="normal" checked={shipment === 0} onChange={() => {dispatch(changeShipment(0));}}/>
                        <label htmlFor="normal">normal</label>
                    </li>
                    <li>
                        <input type="radio" value="fast" name="shipment" id="fast" checked={shipment === 1}onChange={() => {dispatch(changeShipment(1));}}/>
                        <label htmlFor="fast">fast</label>
                    </li>
                    <li>
                        <input type="radio" value="self-take" name="shipment" id="self-pick" checked={shipment === 2} onChange={() => {dispatch(changeShipment(2));}}/>
                        <label htmlFor="self-pick">self pick</label>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Shipment
