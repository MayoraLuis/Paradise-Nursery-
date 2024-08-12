import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="product-card-container">
            <Products/>
            </div>
        </>
    );
};

export default Home;