import React from 'react'

import "./product.css"

const Product = ({ productsList, addToCart }) => {
  return (
    <div className="products_wrap">
      {productsList.map((item) => {
        return (
          <div className="product" key={item.id}>
            <img src={item.image.url} alt="img" />
            <h3>{item.name}</h3>
            <p>{item.price.formatted_with_symbol}</p>
            <button onClick={()=>addToCart(item.id , 1)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product





