import React from "react";
import img1 from "./assets/comfy_hero.webp";
import img2 from "./assets/comfy_hero2.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="Hero_wrapper w-full flex justify-center my-10">
        <div className="Hero_box w-[80%] mx-10  p-5 flex  items-center">
          <div className="left w-1/2 flex flex-col items-center">
            {/* heading div */}
            <div className="w-[70%] mx-auto text-gray-600">
              <h2 className="text-5xl font-bold tracking-wider">
                We are changing
              </h2>
              <h2 className="text-5xl font-bold tracking-wider ">
                the way people Shop
              </h2>
            </div>

            {/* para div */}

            <div className="w-[70%] text-xl my-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </div>

            <div className="flex justify-start">
              <button className="px-5 py-2 text-white bg-blue-600 rounded-lg">
               <Link to="Products">Products</Link>
              </button>
            </div>
          </div>

          {/* right div start */}
          <div className="right w-1/2 h-96">
            <div className="flex h-full p-3 bg-gray-500 justify-center rounded-xl gap-5">
              <img src={img1} className="rounded-lg" />
              <img src={img2} className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
