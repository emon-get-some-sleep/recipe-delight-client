import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { FaHeart } from "react-icons/fa";

const RecipeDetail = ({recipe}) => {
    const {image_url, recipe_name, rating, description, cooking_method, ingredients} = recipe;
  return (
    <div className="grid grid-cols-3  p-[40px] justify-between rounded-lg gap-3 bg-green-50">
      <div className="col-span-1">
        <img
          className=" w-[400px] h-full  rounded-xl"
          src={image_url}
          alt=""
        />
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
          <ol>
            {
                ingredients.map(each => <li key={each}>{each}</li>)
            }
          </ol>
        </p>
        <span className="text-sm font-medium">
          <DynamicStar
            height={15}
            width={15}
            className="border-2"
            rating={rating}
          />{" "}
          {rating} Rating
        </span>
        <button className="text-sm bg-green-400 font-bold text-white text-center h-[25px] rounded w-full">
          <FaHeart className="inline text-red-500 mr-2" /> Favorite
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
