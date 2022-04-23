import React from 'react'
import "./cart.css"

const MYCart = ({ cart, removeFromCart }) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/CBCC/wfm/card-info_desktop_wf-unrecnp.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <div>Hello customer name</div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {cart?.line_items?.map((item) => {
            return (
              <div className="checkoutProduct" key={item.id}>
                <img
                  src={item.image.url}
                  alt="img"
                  className="checkoutProduct__img"
                />
                <div className="checkoutProduct__info">
                  <p className="checkoutProduct__title">{item.name}</p>
                  <p className="checkoutProduct__price">
                    <strong>
                      {item.price.formatted_with_symbol} *{item.quantity}={" "}
                      {cart.currency.symbol} {item.price.raw * item.quantity}
                    </strong>
                  </p>
                  <button onClick={() => removeFromCart(item.id)}>Remove from Basket</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="checkout__right">
        <div className="subtotal">
          <p>
            Subtotal ({cart?.total_items}items) :{" "}
            <strong>{cart?.subtotal?.formatted_with_symbol}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This Order Contains a gift
          </small>
        </div>
        <button >Proceed to check out</button>
      </div>
    </div>
  );
};

export default MYCart;




//  {
//    /* <div className="checkoutProduct">
//           <img
//             src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/BachanPandey/400x39-SWM_179._CB623270002_.jpg"
//             alt="img"
//             className="checkoutProduct__img"
//           />
//           <div className="checkoutProduct__info">
//             <p className="checkoutProduct__title">product name</p>
//             <p className="checkoutProduct__price">
//               <strong>600 * 1= ₹ 600</strong>
//             </p>
//             <button>Remove from Basket</button>
//           </div>
//         </div> */
//  }



//pk_test_41971a54c06462c8873664000c4397ca981e0d0029bb5 commersejs key