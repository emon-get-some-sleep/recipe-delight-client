import React, { useEffect, useState } from "react";
import "./FoodGallary.css";
import SingleGallary from "../SingleGallary/SingleGallary";
import { Slide } from "react-awesome-reveal";

const FoodGallary = () => {
  const [gallary, setGallary] = useState([]);
  useEffect(() => {
    fetch("https://recipi-delight-server.vercel.app/foodGallary")
      .then((res) => res.json())
      .then((data) => setGallary(data.indian_food));
  }, []);
  return (
    <Slide direction="left" duration={1500}>
       <div className="mt-[120px] ">
      <h1 className="text-[32px] md:text-[54px] mb-4 text-center font-bold text-[#41203B]">
        Food Gallary
      </h1>
      <p className="font-semibold text-xl text-center underline">Our most Famous Items</p>
      <div className="grid mt-[40px] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
        {gallary.map((data) => (
          <SingleGallary key={data.id} data={data}></SingleGallary>
        ))}
      </div>
    </div>
    </Slide>
   
  );
};

export default FoodGallary;
