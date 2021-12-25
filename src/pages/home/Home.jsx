import "./home.css"
import TopNav from '../../components/topNav/TopNav'
import ProductCard from "../../components/productCard/ProductCard"

function Home() {
    return (
        <div className="home_container">
            <TopNav />
            <section className="products_container">
                <div className="products_container_wrapper">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </div>
    )
}

export default Home
