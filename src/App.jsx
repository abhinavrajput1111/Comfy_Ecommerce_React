import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Cart from "./Cart.jsx";
import Product from "./Product.jsx";
import Header from "./Header.jsx";
// import PageSwitch from "./PageSwitch"; // Ensure the correct component name
// import PageSwitch from "./PageSwitch.Jsx";
import PageSwitch from "./PageSwitch"
import SingleProduct from "./SingleProduct.jsx";

export const MyContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("newItems"))||[]);

  useEffect(() => {
    localStorage.setItem("newItems", JSON.stringify(cart));
},[cart])


  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://strapi-store-server.onrender.com/api/products');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  function handleProduct(e, item) {
    setCart((prev) => [...prev, item]);
    console.log(cart);
  }

  return (
    <MyContext.Provider value={{ data, setData, cart, setCart, handleProduct }}>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products" element={<PageSwitch />} >
          <Route index element={<Product />} /> 
            <Route path=":id" element={<SingleProduct />} />
          </Route>
        </Routes>

    </MyContext.Provider>
  );
}

export default App;
