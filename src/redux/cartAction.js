export const ADD_PRODUCT = "ADD_PRODUCT"
export const addProduct = (p) => {
    return {
        type: ADD_PRODUCT,
        payload: p,
    }
}

export const INCREMENT = "INCREMENT"
export const increment = (id) => {
    return {
        type: INCREMENT,
        payload: id,
    }
}

export const DECREMENT = "DECREMENT"
export const decrement = (id) => {
    return {
        type: DECREMENT,
        payload: id,
    }
}

export const REMOVE = "REMOVE"
export const remove = (id) => {
    return {
        type: REMOVE,
        payload: id,
    }
}

export const CHANGE_SHIPMENT = "CHANGE_SHIPMENT"
export const changeShipment = (shipment) => {
    return {
        type: CHANGE_SHIPMENT,
        payload: shipment,
    }
}