import { AddShoppingCart } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import "./productCard.css";

function ProductCard({ item, handleOpenSnackbar }) {
    const dispatch = useDispatch();

    const addToCart = item => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        });
    }

    const handleClick = e => {
        
    }

    return (
        <div className="product_card_container">
            <div className="product_image_container">
                <img src={item.imageUrl} alt="product" className="product_image"/>
            </div>
            <div className="product_desc">
                <span className="product_name">{item.name}</span>
                <span className="product_price">{item.price} INR</span>
                <div className="add_to_cart">
                    <button className="add_to_cart_btn"><AddShoppingCart className="addIcon"/> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
