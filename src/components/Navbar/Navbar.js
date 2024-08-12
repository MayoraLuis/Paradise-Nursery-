
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";
//import CartTotal from "../CartContent/CartTotal";

const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
}

const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
}

const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
}


const Navbar = () => {
    const { cart } = useContext(dataContext);
    return (
        <div className="navbar" style={styleObj} >
            <div className="tag">
                <div className="luxury">
                    <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="logo" />
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div>
                            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                        </div>
                    </Link>
                    
                </div>
            </div>

            <div style={styleObjUl}>
                <div>
                    <Link to="/" style={styleA}>
                        Plants
                    </Link>
                </div>
                <div>
                    
                    <Link className="seeCarrito" to={"/cart"}>
                    
                    <div className="carrito">
                    
                    {cart.length > 0 ? <TotalItems/> : null}
                    
                    </div>   
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>-
                    </Link>

                </div>
            </div>




        </div>
    )
}

export default Navbar
