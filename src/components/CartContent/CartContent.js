import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from './CartElements'
import CartTotal from './CartTotal';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./CartContent.css";


const CartContent = () => {
  const {cart} = useContext(dataContext);

  
  return cart.length > 0 ?(
  <>
  <Navbar/>
  <CartElements/>
  <CartTotal/>
  </>
  ): (
    <div className="cart-message">
    <h2 className="cart-message-center">Your Cart is empty</h2>

    <Link className="go_back_shopping_btn" to ="/Home">
    <button>Go Back to shopping</button>
    </Link>
    </div>
  );
};

export default CartContent
