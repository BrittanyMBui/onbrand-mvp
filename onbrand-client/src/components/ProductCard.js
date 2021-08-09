import React, { useContext } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function ProductCard({ product: { productName, brand, category, brandType, url, img, price }}) {

    return(
        <a href="/" className="product-card"> 
            <Card>
                <CardImg src={img} alt="product image" />
                <CardBody>
                    <CardTitle>{productName}</CardTitle>
                    <CardSubtitle>{brand}</CardSubtitle>
                    <CardSubtitle>${price}</CardSubtitle>
                </CardBody>
            </Card>
        </a>
    )
}

export default ProductCard;