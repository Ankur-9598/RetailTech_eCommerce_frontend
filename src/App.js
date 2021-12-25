import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect
  } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/">
                    {user ? <Home /> : <Login />}
                    <Home />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/profile/:username">
                    <Profile />
                </Route> */}
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
