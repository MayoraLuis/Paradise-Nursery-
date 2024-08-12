import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

const CartTotal = () => {
    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc, el)=> acc + el.cost * el.quanty,0);
    return <div className="cartTotal">
        <h3>Total Cart Amount:${total}</h3>

        <div>
            <Link to="/Th">
           <button className="continue_shopping_btn">Buy Now</button>
           </Link>
        </div>

        <div>
            <Link to="/Home">
        <button className="add_btn"> Add More Items </button>
            </Link>
        </div>

    </div>;

    

};

export default CartTotal
