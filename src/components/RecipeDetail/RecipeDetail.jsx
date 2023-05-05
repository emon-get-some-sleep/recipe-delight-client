import React, { useEffect, useState } from "react";
import { DynamicStar } from "react-dynamic-star";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocalStorage } from "../../utilities/localstorage";
import { Slide } from "react-awesome-reveal";

const RecipeDetail = ({recipe, showFavorite}) => {
    // console.log(recipe)
    // const {disabled, setDisabled} = useState(false);
    const [click, setClick] = useState(false);
    // console.log(showFavorite);
    
    const {recepi_id , recipe_id, image_url, recipe_name, rating, description, cooking_method, ingredients} = recipe;
    // i am using two recipe id because of spelling mistakes 
  //  console.log(recepi_id, recipe_id);
  const realId = recepi_id ? recepi_id : recipe_id;
  const handleClick = (id) => {
    toast.success('Added to Favorite');
    setClick(true);
    addToLocalStorage(id);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  p-[40px] justify-between rounded-lg gap-4 bg-green-50">
      <div className="col-span-1">
      <Slide direction='left' duration={2000}>
        <LazyLoad>
        <img
          className=" w-[400px] h-full  rounded-xl"
          src={image_url}
          alt=""
        />
        </LazyLoad>
        </Slide>
        
      </div>
     
      <div className="col-span-1">
        <h2 className="text-xl font-bold my-3">{recipe_name}</h2>
        <p className="">
          {description}
        </p>
        <h2 className="text-[18px] font-bold my-3">Cooking Method</h2>
        <p className="">
          {cooking_method}
        </p>
        
      </div>
      <div className="col-span-1 flex flex-col gap-3 h-full">
        <p className="text-sm">
          {" "}
          <span className="font-bold text-xl">Ingrident</span> 
          
        </p>
        <ol className="text-sm">
            {
                ingredients.map((each, idx) => <li key={idx}>{each}</li>)
            }
          </ol>
        <span className="text-sm font-medium">
          <DynamicStar
            height={15}
            width={15}
            className="border-2"
            rating={rating}
          />{" "}
          {rating} Rating
        </span>
        
        {
            
            click 
            ? <button disabled={true} className="text-sm disabled:opacity-50 bg-green-400 font-bold text-white text-center h-[25px] rounded w-full">
            <FaHeart className="inline text-red-500 mr-2" /> Favorite
          </button>
          :
          <button disabled={false} onClick={() => handleClick(realId)} className="text-sm disabled:opacity-50 bg-green-400 font-bold text-white text-center h-[25px] rounded w-full">
            <FaHeart className="inline text-red-500 mr-2" /> Favorite
          </button>
          
          } 
          
        
      </div>
    </div>
  );
};

export default RecipeDetail;
