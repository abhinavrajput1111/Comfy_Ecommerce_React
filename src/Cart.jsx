import React, { useContext, useState } from "react";
import { MyContext } from "./App";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(MyContext);
  let sum = 0;

   cart.map((item, index) => {
            return (sum += item.attributes.price / 100);
          })

  
  return (
    <div className="cart_wrapper my-10 w-full p-5 flex justify-center">
      <div className="w-[80%] h-auto">
        <h1 className="text-2xl font-semibold m-5 p-3 px-10 text-gray-700">Cart</h1>
        <hr />
        <div className="products_box shadow-xl flex flex-wrap justify-center items-center">
          {cart.map((item, index) => (
            <div key={index} className="w-[30%] h-auto my-7">
              <div className="bg-cyan-100 rounded-lg h-auto mx-5 p-5">
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.attributes.image}
                    className="mx-auto my-8 rounded-lg h-64"
                    alt={item.attributes.title}
                  />
                </Link>
                <p className="px-10 text-2xl text-center">
                  <Link to={`/products/${item.id}`}>{item.attributes.title}</Link>
                </p>
                <p className="text-center my-5 text-xl font-bold">
                  <Link to={`/products/${item.id}`}>${item.attributes.price / 100}</Link>
                </p>
                <button
                  className="px-3 py-2 w-full mx-auto bg-blue-600 text-white rounded-lg" onClick={() => {
                    let temp = [...cart];
                    
                    const filter = temp.filter((item,idx) => {
                      return idx !== index;                     
                    })
                    setCart(filter);
                    console.log(cart);
                    console.log(filter);

                  }}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

            <h2 className="text-3xl mx-5">Total Price: </h2>
        <div className="text-3xl"> ${ sum}</div>
    </div>

  );
}

export default Cart;
