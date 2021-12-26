import "./home.css"
import TopNav from '../../components/topNav/TopNav'
import ProductCard from "../../components/productCard/ProductCard"
import { Snackbar } from "@material-ui/core"
import { useState } from "react"

const shoppingItems = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1528795259021-d8c86e14354c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxNHx8bW9iaWxlfGVufDB8fHx8MTY0MDQzNTc4Mw&ixlib=rb-1.2.1&q=80&w=1080',
        name: 'Samsung 5G, 48GB RAM',
        price: '20000'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1603570784360-7c00ee305d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxNnx8Y2xvdGh8ZW58MHx8fHwxNjQwNTI4MjYx&ixlib=rb-1.2.1&q=80&w=1080',
        name: 'Bajaj Sewing Machine Ultra',
        price: '35999'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw3fHxtb2JpbGV8ZW58MHx8fHwxNjQwNTI4MzM0&ixlib=rb-1.2.1&q=80&w=1080',
        name: 'Google 5th Generation Mobile',
        price: '49599'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw0fHxsYXB0b3B8ZW58MHx8fHwxNjQwNTI4Mzc2&ixlib=rb-1.2.1&q=80&w=1080',
        name: 'Acer Nitro 5 | 256 GB SSD + 1 TB HDD',
        price: '53499'
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw2fHx3YXRjaHxlbnwwfHx8fDE2NDA1Mjg0MzQ&ixlib=rb-1.2.1&q=80&w=1080',
        name: 'Sonatica Silver Watch',
        price: '45999'
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw0fHx0c2hpcnR8ZW58MHx8fHwxNjQwNTI4NTIx&ixlib=rb-1.2.1&q=80&w=1080',
        name: 'Raymond Tshirt Half Sleeve',
        price: '4999'   
    }
]

function Home() {
    const [snackbarState, setSnackbarState] = useState(false);

    const handleOpenSnackbar = () => {
        setSnackbarState(true);
    }

    const handleClose = () => {
        setSnackbarState(false)
    }
    return (
        <div className="home_container">
            <TopNav />
            <section className="products_container">
                <div className="products_container_wrapper">
                    {shoppingItems.map(item => (<ProductCard key={item.id} item={item} handleOpenSnackbar={handleOpenSnackbar}/>))}
                </div>
            </section>

            <Snackbar 
                open={snackbarState.open}
                onClose={handleClose}
                TransitionComponent="Fade"
                message="Item Added to the cart"
            />
        </div>
    )
}

export default Home
