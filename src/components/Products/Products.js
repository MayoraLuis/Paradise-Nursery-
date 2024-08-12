import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css"



const Products = () => {
  const { data,buyProducts } = useContext(dataContext);

  return data.map((product) => {
    return (
      <div className="product-grid">
        <div className="card" key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt="image-product-card" />
          <p>{product.description}</p>
          <h4>${product.cost}</h4>
          <button onClick={()=>buyProducts(product)}>Add to cart</button>
        </div>
      </div>
    )
  })
};

export default Products
