import UserInfo from '../components/UserInfo';
import ProductCard from '../components/ProductCard';
import { useQuery } from '@apollo/client';
import { FETCH_PRODUCTS_QUERY } from '../util/graphql';
import { Container, Row, Col } from 'reactstrap';

function Home(props) {
    const { loading, error, data } = useQuery(FETCH_PRODUCTS_QUERY);

    return (
        <div className="home">
            <UserInfo />
            <div className="product-card">
                { loading ? (
                    <h1>Loading Products..</h1>
                ) : (
                    <Container>
                        <Row>
                        {
                            data.getProducts && data.getProducts.map((product) => (
                                <Col key={product.id}>
                                    <ProductCard product={product} />
                                </Col>
                            ))
                        }
                        </Row>
                    </Container>
                )}
            </div>
        </div>
    )
}

export default Home;