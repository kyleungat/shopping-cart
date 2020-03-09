import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import LittleCartBox from './LittleCartBox'

function ShoppingCartButton() {

    const length = useSelector(state => state.cart.cart.length);

    const [isShow, setIsShow] = useState(false);

    return (
        <>
            {isShow && <LittleCartBox />}
            <button id="cart-button" onClick={() => setIsShow(!isShow)}><i className="fas fa-cart-plus"></i><span id="cart-indicator">{length}</span></button>
        </>
    )
}

export default ShoppingCartButton
