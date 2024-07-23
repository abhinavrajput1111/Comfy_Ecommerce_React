import React, { useContext, useEffect, useState } from "react";
// import { ProductContext } from "./Home";
import { Link } from "react-router-dom";
import { MyContext } from "./App";

function Product() {
const {data,handleProduct} =  useContext(MyContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    // console.log(products);
  }, [data]);

  return (
    <div>
      <div className="featured_wrapper my-10 w-full p-5 flex justify-center ">
        <div className="  h-auto">
          <h1 className="text-2xl font-semibold m-5 p-3 px-10 text-gray-700">
            Products
          </h1>
          <hr />

          <div className="products_box shadow-xl flex flex-wrap w-full justify-center items-center">
            {products.map((item, index) => {
              return (
                <div key={index} className="w-[30%] h-auto my-7">
                  <div className="">
                    <div className="bg-cyan-100 rounded-lg h-auto mx-5 p-5">
                      <Link to={`/Products/${ item.id}`}>
                        <img
                          src={item.attributes.image}
                          className=" mx-auto my-8 rounded-lg h-64"
                        />
                      </Link>
                      <p className="px-10 text-2xl text-center ">
                        <Link to={`/Products/${item.id}`}>{item.attributes.title}</Link>
                      </p>

                      <p className="text-center my-5 text-xl font-bold">
                        <Link to={`/Products/${item.id}`}>{item.attributes.price / 100}</Link>
                      </p>
                       <button className="px-3 py-2 w-full mx-auto bg-blue-600 text-white rounded-lg " onClick={(e) => {
                      handleProduct(e, item);
                     }}>Add to Bag</button>
                    </div>
                   
                  </div>
                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
