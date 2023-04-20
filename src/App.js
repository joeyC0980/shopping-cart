import React,{useState} from "react";
import Products from"./Products";
import Cart from "./Cart";
import './App.css';

const PAGE_PRODUCTS = "products";
const PAGE_CART ='cart';

function App() {
  const [cart,setCart] =useState([]);
  const [page,setPage] =useState(PAGE_PRODUCTS);

  const removeFromCart = (productToRemove) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((product) => product.name === productToRemove.name);
  
    if (itemInCart.quantity === 1) {
      newCart = newCart.filter((product) => product !== productToRemove);
    } else {
      itemInCart.quantity--;
    }
  
    setCart(newCart);
  };
  

const navigateTo =(nextPage) =>{
  setPage(nextPage);
};

const addToCart=(product) =>{
  let newCart = [...cart];
  let itemInCart=newCart.find(
    (item)=> product.name === item.name
  );
  
  if(itemInCart){
    itemInCart.quantity++;
  }else{
    itemInCart = {
      ...product,quantity:1,
    };
  
    newCart.push(itemInCart);
  }
   
  setCart(newCart);

};

const clearCart=() =>{
 setCart([])

};

const getCartTotal=()=>{
  return cart.reduce((sum,{quantity})=> sum + quantity, 0);

}
const setQuantity= (product,amount) =>{
  const newCart = [...cart];
  newCart.find(item => item.name === product.name).quantity =amount;
  setCart(newCart);
    
};

  return (
   
    <div >
    <h1 className="h1">VIC TOR I A BEC K HAM</h1>
    <div className="header">
      <button onClick={()=>navigateTo(PAGE_CART) } className="button1">🛒 Go to Cart({getCartTotal()})</button>
      <button onClick={()=>navigateTo(PAGE_PRODUCTS) }className="button1">View Products</button>
    </div>
    <div className="container">
      <div className="child1">
    {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>} 
    </div>
    <div className="child2">
    {page === PAGE_CART && <Cart cart={cart}  setQuantity={setQuantity} removeFromCart={removeFromCart} clearCart={clearCart} />} 
    </div>

  </div>
  </div>
  );
  }


export default App;
