import Header from './components/Header/Header';
import Product from './components/Product/Product';
import { BrowserRouter, Switch , Route } from "react-router-dom"
import MYCart from "./components/Cart/Cart";
import commerce from './lib/commerce.js';
import { useEffect, useState } from 'react';
import Checkout from './components/checkoutPage/checkout';
import ThankYou from './components/ThankYouPage/ThankYou';

function App() {

  const [productsList, setProductsList] = useState([])
  const [productByCategory , setProductByCategory] = useState([])
  const [cart, setCart] = useState([])
  const [categoryList , setCategoryList] = useState([])
 
  const fetchProduct = async () => {
    const response = await commerce.products.list();
    setProductsList(response.data)
    console.log(response)
  }

    const fetchProductByCategory = async (category) => {
      const response = await commerce.products.list({
        category_slug:[category]
      })
     setProductByCategory(response.data)
    };
  


  const fetchCategories = async (prodId) => {
    const response = await commerce.categories.list()
    console.log(response);
    setCategoryList(response.data)
  }



  const addToCart = async (prodId , qty) => {
    const response = await commerce.cart.add(prodId, qty);

    setCart(response.cart)
    
  }

  const fetchCart = async (prodId, qty) => {
    setCart(await commerce.cart.retrieve())
  }

  const removeFromCart = async (prodId) => {
    const response = await commerce.cart.remove(prodId)
    
    setCart(response.cart)
  }

  useEffect(() => {
    fetchProduct();
    fetchCart();
    fetchCategories()
  },[])
  

  return (
    <div className="App">
      <Header cart={cart} categoryList={categoryList} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="banner">
              <img
                src="https://m.media-amazon.com/images/I/61fItkRsNPL._SX3000_.jpg"
                alt="img"
              />
            </div>
            <Product productsList={productsList} addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <MYCart cart={cart} removeFromCart={removeFromCart} />
          </Route>
          <Route exact path="/category/:slug">
            <div style={{ marginBottom: "320px" }}> </div>
            <Product
              productsList={productByCategory}
              fetchProductByCategory={fetchProductByCategory}
              addToCart={addToCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/thankyou">
            <ThankYou />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;






//  <Header />
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/">
//             {/* <div className="banner">
//               <img
//                 src="https://m.media-amazon.com/images/I/61fItkRsNPL._SX3000_.jpg"
//                 alt="img"
//               />
//             </div> */}
//             <Product />
//           </Route>

          // <Route exact path="/cart">
          //   <Cart />
          // </Route>
//         </Switch>
//       </BrowserRouter>