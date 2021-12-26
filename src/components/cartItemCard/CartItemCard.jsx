import "./cartItemCard.css";
import productImage from "../../pages/login/img/img1.jpg";
import { Cancel } from "@material-ui/icons";
import { useState } from "react";

function CartItemCard() {
    const [itemQuantity, setItemQuantity] = useState(1);
    const [visible, setVisible] = useState(true);

    const removeProductFromCart = () => {
        setVisible(false);
    }

    return (
        visible &&
            <tr className="cart_item_card">
                <td className="cart_item">
                    <div className="cart_product_image">
                        <img src={productImage} alt="cart-placeholder" className="product_frame"/>
                    </div>
                    <div className="cart_product_details">
                        <p className="cart_quantity"><strong><span className="item_quantity">{itemQuantity}</span> x</strong> Apple Smart Watch</p>
                        <p className="cart_added_by">Added By:- <a href="/profile">Ankur</a></p>
                    </div>
                </td>

                <td className="cart_item_price">Rs. 20000.00</td>

                <td className="cart_item_quantity">
                    <input type="number" min="1" value={itemQuantity} name="item_quantity" className="quantity_field" onChange={e => setItemQuantity(e.target.value)}/>
                </td>

                <td className="cart_subtotal">105.00</td>

                <td className="cart_item_remove">
                    <button onClick={removeProductFromCart}><Cancel size={24} style={{width: "30px", height: "30px"}}/></button>
                </td>
            </tr>
    )
}

export default CartItemCard
