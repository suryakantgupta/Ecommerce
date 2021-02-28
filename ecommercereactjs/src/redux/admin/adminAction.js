import {baseUrl} from '../../util/baseUrl'
import {
    POST_ADDPRODUCTS_REQUEST,
    POST_ADDPRODUCTS_SUCCESS,
    POST_ADDPRODUCTS_FAILURE
} from './adminTypes';
import axios from 'axios';

    export const postAddProducts = (data) => {
        return (dispatch) => {

            axios.post(`${baseUrl}/admin/add-product`,data)
            .then((result)=>{
                console.log(result)
            })
        }
    };