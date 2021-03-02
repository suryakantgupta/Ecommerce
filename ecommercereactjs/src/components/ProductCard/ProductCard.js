import React from 'react'
import './ProductCard.scss'
import { Box } from '@material-ui/core'
import { Card } from 'react-bootstrap'
import { cn } from '@bem-react/classname';

function ProductCard(props) {

    const productCard = cn('productCard');

    return (
        <Box
            boxShadow={5}
            width={210}
        >
            <Card>
                <img
                    className={productCard('card-image')}
                    src={props.data.imageUrl} />
                <Card.Body
                    className={productCard('card-body')}
                >
                    <h4
                        style={{ textAlign: 'center' }}
                    >
                        {props.data.title}
                    </h4>

                    <div
                        style={{margin:'10px'}}
                    >
                        ₹{props.data.price}
                    </div>
                </Card.Body>

            </Card>
        </Box>
    )
}

export default ProductCard
