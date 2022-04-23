import Header from './components/Header/Header';
import Product from './components/Product/Product';
import { BrowserRouter, Switch , Route } from "react-router-dom"
import MYCart from "./components/Cart/Cart";
import commerce from './lib/commerce.js';
import { useEffect, useState } from 'react';

function App() {

  const [productsList, setProductsList] = useState([])
  const [cart , setCart] = useState([])
 
  const fetchProduct = async () => {
    const response = await commerce.products.list();
    setProductsList(response.data)
    console.log(response)
  }



  const addToCart = async (prodId , qty) => {
    const response = await commerce.cart.add(prodId, qty);

    setCart(response.cart)
    console.log(response)
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
  },[])
  

  return (
    <div className="App">
      <Header cart={cart} />
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