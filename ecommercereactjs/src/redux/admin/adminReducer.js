import {
    POST_ADDPRODUCTS_REQUEST,
    POST_ADDPRODUCTS_SUCCESS,
    POST_ADDPRODUCTS_FAILURE,
    GET_ADDPRODUCTS_REQUEST,
    GET_ADDPRODUCTS_SUCCESS,
    GET_ADDPRODUCTS_FAILURE
} from './adminTypes'

const initialPostAddProductsState = {
    loading: true,
    message: '',
}

const initialGetAddProductsState = {
    loading: true,
    products: [],
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

export const getAddProductsReducer = (state = initialGetAddProductsState , action) => {
    switch (action.type) {
        case GET_ADDPRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case GET_ADDPRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload 
            }
        
        case GET_ADDPRODUCTS_FAILURE:
            return {
                loading: false,
                products: action.payload
            }
        
        default:
            return state;
    }
}