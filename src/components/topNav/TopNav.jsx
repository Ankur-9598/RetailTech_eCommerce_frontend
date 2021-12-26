import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import "./topNav.css";

export default function TopNav() {
    return (
        <nav className="top_nav_main">
            <div className="nav_logo">
                <span>My Logo</span>
            </div>
            <div className="nav_contents">
                <a href="/profile" className="nav_profile_section">
                    <div className="nav_profile_image">
                        <AccountCircle id="icon"/>
                    </div>
                    <div className="nav_profile_name">Login</div>
                </a>
                <div className="nav_cart_section">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart id="icon" />
                    </Badge>
                </div>
            </div>
        </nav>

    )
}
