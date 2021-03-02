import {baseUrl} from '../../util/baseUrl'
import {
    POST_ADDPRODUCTS_REQUEST,
    POST_ADDPRODUCTS_SUCCESS,
    POST_ADDPRODUCTS_FAILURE
} from './adminTypes';
import axios from 'axios';

    export const postAddProducts = (data) => {
        return (dispatch) => {
            dispatch(postAddProductsRequest())
            axios.post(`${baseUrl}/admin/add-product`,data)
            .then((result)=>{
                dispatch(postAddProductsSuccess(result.data))
            })
            .catch((err)=>{
                dispatch(postAddProductsFailure(err))
            })
        }
    };

    export const postAddProductsRequest = () => {
        return {
            type: POST_ADDPRODUCTS_REQUEST,
        }
    }

    export const postAddProductsSuccess = (data) => {
        return {
            type: POST_ADDPRODUCTS_SUCCESS,
            payload: data
        }

    }

    export const postAddProductsFailure = (data) => {
        return {
            type: POST_ADDPRODUCTS_FAILURE,
            payload: data
        }
    }