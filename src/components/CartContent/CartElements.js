import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import "./CartContent.css"


const CartElements = () => {
    const {cart, setCart} = useContext(dataContext);

    const deleteProduct = (id) => {
      const foundId = cart.find((element)=>element.id ===id);

      const newCart = cart.filter((element)=>{
        return element !== foundId;
      })

      setCart(newCart)

    };
  return cart.map((product)=>{
    return (
        <div className="cartContent" key={product.id}>
            <img src={product.image} alt="product-card"/>
            <h3 className="name">{product.name}</h3>
            <CartItemCounter product={product}/>
            <h4 className="cost">${product.cost * product.quanty}</h4>
            <h3 class="cart-delete-button" onClick={()=>deleteProduct(product.id)}>❌</h3>
        </div>
    )
  })
}



export default CartElements
