import React from "react"


export default function Cart({cart,clearCart,removeFromCart,setQuantity}){

const getTotalSum=()=>{
    return cart.reduce((sum,{cost,quantity})=> sum + cost*quantity, 0);

}



    return(
        <>
        <div >
            <h1>Your Cart 🛒</h1>
            <div className="head">
            <div> {cart.length > 0 &&( <button onClick={clearCart}>Remove All</button>)}</div>
           <div><button className="total">Total:${getTotalSum()}</button></div>
           </div>
      
           <div className="products-container" height="570" width="400">
    
        {cart.map((product,index) =>(
          <div className="product-card" key={index}>
            <div>{product.name}</div>
            <div>${product.cost}</div>
            Quantity:<input value={product.quantity} onChange={(e)=> setQuantity(product,e.target.value)} style={{width: "20px", height: "10px" }}></input>
            <img src={product.image} alt={product.name} height="70%" width="90%"/>
            <button onClick={()=> removeFromCart(product)} className="button2">Remove</button>
        
            </div>
        ))}
        </div>
            </div>
         
            </>
    )
}