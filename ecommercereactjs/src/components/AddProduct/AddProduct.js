import React from 'react';
import './AddProduct.scss';
import {cn} from '@bem-react/classname';
import { Card } from 'react-bootstrap';
import { Box } from '@material-ui/core'
import useInput from '../../hooks/useInput';

function AddProduct() {

    const addProduct = cn('addProduct');

    const [productTitle,bindProductTitle]               = useInput('');
    const [productImageLink,bindProductImageLink]       = useInput('');
    const [productPrice,bindProductPrice]               = useInput('');
    const [productDescription,bindProductDescription]   = useInput('');

    return (
        <div
            className={addProduct()}
        >
        <Box
            boxShadow={1}
            width={0.4}
        >
            <Card>
                <Card.Header className={addProduct("card-header")} >Add Product</Card.Header>

                <Card.Body
                    className={addProduct('card-body')}
                >
                    <form
                        className={addProduct('add-product-form')}
                    >


                        <label for="title">
                            Product Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={productTitle}
                            {...bindProductTitle}
                        />


                        <label for="imageLink">
                            Product Image
                        </label>
                        <input
                            type="text"
                            id="imageLink"
                            value={productImageLink}
                            {...bindProductImageLink}
                        />

                        <label for="price">
                            Product Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            value={productPrice}
                            {...bindProductPrice}
                        />

                        <label for="description">
                            Product Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            value={productDescription}
                            {...bindProductDescription}
                        />
                    </form>
                </Card.Body>
                <Card.Footer
                className={addProduct('card-footer')}
                >
                <button className={addProduct('add-btn')} type="submit" >ADD</button>
                </Card.Footer>
            </Card>
        </Box>
        </div>
    )
}

export default AddProduct
