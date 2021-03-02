import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Preview.scss'
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux'
import { getAddProducts } from '../../redux';
import Loader from '../Loader/Loader';
import { Spinner } from 'react-bootstrap';
import { CircularProgress} from '@material-ui/core'

function Preview() {

    const preview = cn('preview');

    const dispatch = useDispatch()
    const getProduct = useSelector(state => state.getProduct)

    useEffect(() => {
        getProducts()
    }, [getProduct.loading])

    const getProducts = () => {
        
        if (getProduct.loading) {
            dispatch(getAddProducts())
        }
    }

    return (<React.Fragment>
        {getProduct.loading ? (
                <Loader />
        ) : (
                <div
                    className={preview()}
                >
                    {getProduct.products.map((data) => (<ProductCard data={data} />))}
                </div>
            )}
    </React.Fragment >
    )
}

export default Preview
