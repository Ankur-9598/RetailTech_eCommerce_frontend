import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect
  } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

function App() {
    return (
        <ReduxProvider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Router>
        </ReduxProvider>
    );
}

export default App;
