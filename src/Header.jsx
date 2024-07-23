import React, { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
import { MyContext } from "./App";

function Header() {

const {cart} =  useContext(MyContext);

  return (
    <>
      <div className="wrapper w-full h-auto">
        <div className="box">
          <div className="top py-3 bg-blue-900 text-white  text-lg flex justify-end">
            <ul className="flex gap-10 mx-16 px-8">
              <li>Sign in/Guest</li>
              <li>Create Account</li>
            </ul>
          </div>

          {/* header 2 starts here */}
          <div className="bottom p-3 bg-cyan-100 px-20 text-lg items-center">
            <div className="flex justify-between">
              {/* logo div */}
              <div className="logo">
                <h3 className="text-3xl font-bold tracking-widest text-blue-700">
                <Link to="/"> Logo </Link> 
                </h3>
              </div>

              {/* ul in anchor div */}
              <div className="flex">
                <ul className="flex justify-between gap-10">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="About">About</Link>
                  </li>
                  <li>
                    <Link to="Products">Products</Link>
                  </li>
                  <li>
                    <Link to="Cart">Cart</Link>
                  </li>
                </ul>
              </div>

              {/* header bottom icons div */}
              <div className="flex justify-between gap-10 mx-10">
                <p
                  className="text-2xl"
                  onClick={(e) => alert("dont click it now")}
                >
                  <IoMoon />
                </p>
              <div className="flex gap-3">  <p className="text-2xl">
                  <Link to="Cart">
                    <FaShoppingCart />
                  
                  </Link>
                </p>
                  <span>{cart.length}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Header;
