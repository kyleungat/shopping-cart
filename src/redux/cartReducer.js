import {ADD_PRODUCT, INCREMENT, DECREMENT, REMOVE, CHANGE_SHIPMENT} from './cartAction'

const initState = {
    cart: [],
    info: {
        tax: 1,
        discount: 10,
    },
    shipment: 0,
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const temp = {
                ...action.payload,
                quantity: 1,
                inCart: true,
            }
            return {
                ...state,
                cart: [...state.cart, temp]
            }
        }
        case INCREMENT: {
            const temp = state.cart.map((element, index) => {
                if (action.payload === element.id){
                    return {
                        ...element,
                        quantity: element.quantity + 1,
                    }
                }
                return element;
            })
            return {
                ...state,
                cart: temp,
            }
        }
        case DECREMENT: {
            const temp = state.cart.map((element, index) => {
                if (action.payload === element.id){
                    return {
                        ...element,
                        quantity: element.quantity - 1,
                    }
                }
                return element;
            })
            return {
                ...state,
                cart: temp,
            }
        }
        case REMOVE: {
            const temp = state.cart.filter((element) => {
                return (element.id !== action.payload);
            })
            return {
                ...state,
                cart: temp,
            }
        }
        case CHANGE_SHIPMENT: {
            return {
                ...state,
                shipment: action.payload,
            }
        }
        default:
            return state;
    }
}