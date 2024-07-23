import React, { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./App";


function SingleProduct() {
  const { data } = useContext(MyContext);
  const [single, setSingle] = useState({});

  const { id } = useParams();

  <h1 className="text-5xl ">Single Product / {id}</h1>;

  useEffect(() => {
    if (data.length > 0 && id) {
      setSingle(
        data.find((item) => {
          return item.id == id;
        })
      );
      console.log(data);
    }
  }, [id, data]);

  return (
    <>
        { Object.keys(single).length > 0 && id ? (
    <div>
    <h1 className="headingSingleProduct text-4xl text-center uppercase tracking-widest"> {`${single.attributes.title}/${id}`}</h1>
          <div className="m-5 flex p-10">
            
        <div className="left w-[40%] border-2">
              <img src={single.attributes.image} style={{ height: "500px", width: "600px", borderRadius: "4rem"}}/>
        </div>
        <div className="right mx-auto w-[40%] border-2">
          <h1 className="text-5xl my-5 text-center uppercase tracking-wider">
            {single.attributes.title}
          </h1>
          <div className="border-2 p-10">
            <p className="text-2xl">{single.attributes.description}</p>
            <p>{single.attributes.price / 100}</p>
          </div>
        </div>
                  </div>
                  </div>)
    
: (<p>Loading</p>)
                
}
      </>
  );
}

export default SingleProduct;
