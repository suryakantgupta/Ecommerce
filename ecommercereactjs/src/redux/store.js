import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getAddProductsReducer, postAddProductsReducer } from './admin/adminReducer'

const rootReducer = combineReducers({
    postProduct: postAddProductsReducer,
    getProduct: getAddProductsReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store