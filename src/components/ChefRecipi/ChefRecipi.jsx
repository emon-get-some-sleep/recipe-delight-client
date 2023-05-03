import React from "react";
import { FaHeart, FaRegStickyNote, FaUserAstronaut } from "react-icons/fa";
import { DynamicStar } from 'react-dynamic-star';
import { useLoaderData } from "react-router-dom";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
const ChefRecipi = () => {
  const recipe = useLoaderData();
  // console.log(recipe);
  const {id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes, recipes, about} = recipe;
  return (
    <div className="grid grid-cols-4 mt-[100px] gap-3">
      <div className="col-span-1 rounded-[25px] shadow-lg p-4 bg-green-50 h-[500px]">
        <img
          className="w-[200px] rounded-lg"
          src={chef_picture}
          alt=""
        />
        <h2 className="font-bold text-[20px] my-3">{chef_name}</h2>
        <p className="font-medium text-sm">
          {" "}
          <FaUserAstronaut className="inline text-violet-500 mr-2" /> {years_of_experience}
        </p>
        <p className="font-medium text-sm">
          {" "}
          <FaRegStickyNote className="inline text-green-600 mr-2" /> {number_of_recipes}
        </p>
        <p className="font-medium text-sm">
          {" "}
          <FaHeart className="inline text-red-500 mr-2" /> {likes} likes
        </p>
        <p className="text-sm mt-4">
        {about}
        </p>
      </div>
      <div className="col-span-3 flex flex-col gap-3 border rounded-lg">
        
        {
          recipes.map(recipe => <RecipeDetail key={recipe.recipe_id} recipe={recipe}></RecipeDetail>)
        }
      </div>
    </div>
  );
};

export default ChefRecipi;
