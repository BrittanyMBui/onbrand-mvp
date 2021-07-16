import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_PRODUCTS_QUERY } from '../util/graphql';

import { Container, Row, Col } from 'reactstrap';

function ProductCard() {
    const { loading, error, data } = useQuery(FETCH_PRODUCTS_QUERY);

    return(
        <Container>
            <Row>
                <Col>Product</Col>
                <Col>Product</Col>
                <Col>Product</Col>
                <Col>Product</Col>
            </Row>
        </Container>
    )
}

export default ProductCard;