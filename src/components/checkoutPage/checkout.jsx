import React from 'react'
import "./checkout.css"

const Checkout = () => {
  return (
    <div className="checkout_wrap">
      <h2>Shipping details</h2>
      <br />
      <form action="">
        <div className="checkout_form">
          <div className="checkout_colum">
            <label>First Name</label>
            <input type="text" required name="firstname" />
          </div>

          <div className="checkout_colum">
            <label htmlFor="">Last Name</label>
            <input type="text" required name="Lastname" />
          </div>

          <div className="checkout_colum">
            <label htmlFor="">Address</label>
            <input type="text" required name="address" />
          </div>

          <div className="checkout_colum">
            <label htmlFor="">Email</label>
            <input type="email" required name="Email" />
          </div>

          <div className="checkout_colum">
            <label htmlFor="">City</label>
            <input type="text" required name="city" />
          </div>

          <div className="checkout_colum">
            <label htmlFor="">Zip Code</label>
            <input type="Number" required name="zipcode" />
          </div>

          <div className="checkout_colum">
            <label htmlFor="">Shipping country</label>
            <select name="country" id="">
              <option value="india">Slect Country</option>
            </select>
          </div>

          <div className="checkout_colum">
            <label htmlFor="">Shipping Sub Division</label>
            <select name="subdivision" id="">
              <option value="subdivision">Sub Division</option>
            </select>
          </div>

          <div className="checkout_colum">
            <label htmlFor="">Shipping Option</label>
            <select name="country" id="">
              <option value="india">India</option>
            </select>
          </div>

          <div className="checkout_colum">
            <input type="number" placeholder='card number' />
            <input type="date" />
           
            
          </div>

          <div className="checkout_colum">
            <label htmlFor="">&nbsp;</label>
            <button>Pay Now</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout