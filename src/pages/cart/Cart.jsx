import { ArrowForward } from "@material-ui/icons";
import CartItemCard from "../../components/cartItemCard/CartItemCard";
import TopNav from "../../components/topNav/TopNav";
import "./cart.css";

function Cart() {
    return (
        <div className="cart_container">
            <TopNav />
            <h2 className="cart_heading">My Cart</h2>
            <main className="cart_global">
                <div className="cart_section_container">
                    <table className="cart_labels">
                        <tr>
                            <th class="item item-heading">Item</th>
                            <th class="price">Price</th>
                            <th class="quantity">Quantity</th>
                            <th class="subtotal">Subtotal</th>
                            <th>Remove</th>
                        </tr>
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                    </table>
                </div>

                <div className="cart_summary_container">
                    <div className="cart_summary">
                        <div className="cart_summary_total_items">
                            <span className="total_items">5 </span>
                            Items in your Cart
                        </div>
                        <div className="cart_summary_subtotal">
                            <div className="subtotal_title">Subtotal</div>
                            <div class="subtotal_value final_value" id="cart_subtotal">2130.00</div>
                        </div>
                        <div className="cart_summary_discount">
                            <div className="discount_title">Discount</div>
                            <div class="discount_value">- 30.00</div>
                        </div>

                        <div className="cart_summary_total">
                            <div className="total_title">Total</div>
                            <div className="total_value">2100.00</div>
                        </div>

                        <div className="cart_summary_checkout">
                            <button className="checkout_btn">Checkout <ArrowForward style={{marginLeft: "5px"}}/></button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart
