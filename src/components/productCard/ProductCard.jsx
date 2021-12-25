import { AddShoppingCart } from "@material-ui/icons";
import "./productCard.css";

function ProductCard() {
    return (
        <div className="product_card_container">
            <div className="product_image_container">
                <img src="https://images.unsplash.com/photo-1528795259021-d8c86e14354c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxNHx8bW9iaWxlfGVufDB8fHx8MTY0MDQzNTc4Mw&ixlib=rb-1.2.1&q=80&w=1080" alt="product image" className="product_image"/>
            </div>
            <div className="product_desc">
                <span className="product_name">Apple Smart Watch 3rd Generation</span>
                <span className="product_price">20,000 INR</span>
                <div className="add_to_cart">
                    <button className="add_to_cart_btn"><AddShoppingCart className="addIcon"/> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
