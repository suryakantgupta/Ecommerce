import {baseUrl} from '../../util/baseUrl'
import {
    POST_ADDPRODUCTS_REQUEST,
    POST_ADDPRODUCTS_SUCCESS,
    POST_ADDPRODUCTS_FAILURE,
    GET_ADDPRODUCTS_REQUEST,
    GET_ADDPRODUCTS_SUCCESS,
    GET_ADDPRODUCTS_FAILURE
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

    export const getAddProducts = () => {
        return (dispatch) => {
            dispatch(getAddProductsRequest())
            axios.get(`${baseUrl}/admin/get-product`)
            .then((result)=>{
                dispatch(getAddProductsSuccess(result.data))
            })
            .catch((err)=>{
                dispatch(getAddProductsFailure(err))
            })
        }
    };

    export const getAddProductsRequest = () => {
        return {
            type: GET_ADDPRODUCTS_REQUEST,
        }
    }

    export const getAddProductsSuccess = (data) => {
        return {
            type: GET_ADDPRODUCTS_SUCCESS,
            payload: data
        }

    }

    export const getAddProductsFailure = (data) => {
        return {
            type: GET_ADDPRODUCTS_FAILURE,
            payload: data
        }
    }