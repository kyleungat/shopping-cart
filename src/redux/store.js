import {createStore, combineReducers} from 'redux'
import {cartReducer} from './cartReducer'
import {productsReducer} from './productsReducer'

const rootReducer = combineReducers({
    cart: cartReducer, 
    products: productsReducer,
});

const shoppingStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default shoppingStore;