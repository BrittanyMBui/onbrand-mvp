import UserInfo from '../components/UserInfo';
import ProductCard from '../components/ProductCard';

function Home(props) {

    return (
        <div className="home">
            <UserInfo />
            <div className="product-card">
            <ProductCard />
            </div>
        </div>
    )
}

export default Home;