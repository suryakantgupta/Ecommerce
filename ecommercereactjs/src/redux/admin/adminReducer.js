import {
    POST_ADDPRODUCTS_REQUEST,
    POST_ADDPRODUCTS_SUCCESS,
    POST_ADDPRODUCTS_FAILURE
} from './adminTypes'

const initialPostAddProductsState = {
    loading: true,
    message: '',
}

export const postAddProductsReducer = (state = initialPostAddProductsState , action) => {
    switch (action.type) {
        case POST_ADDPRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case POST_ADDPRODUCTS_SUCCESS:
            return {
                loading: false,
                message: action.payload 
            }
        
        case POST_ADDPRODUCTS_FAILURE:
            return {
                loading: false,
                message: action.payload
            }
        
        default:
            return state;
    }
}