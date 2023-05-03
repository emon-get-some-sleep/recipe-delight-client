import React from "react";
import { FaHeart, FaRegStickyNote, FaUserAstronaut } from "react-icons/fa";
import { DynamicStar } from 'react-dynamic-star';
const ChefRecipi = () => {
  return (
    <div className="grid grid-cols-4 mt-[100px] gap-3">
      <div className="col-span-1 rounded-[25px] shadow-lg p-4 bg-green-50 h-screen">
        <img
          className="w-[200px] rounded-lg"
          src="https://img.freepik.com/premium-photo/happy-male-indian-chef-pointing-with-his-hands-grey-wall_156779-279.jpg?w=740"
          alt=""
        />
        <h2 className="font-bold text-[20px] my-3">Arab Sen</h2>
        <p className="font-medium text-sm">
          {" "}
          <FaUserAstronaut className="inline text-violet-500 mr-2" /> 12 years
          of experience
        </p>
        <p className="font-medium text-sm">
          {" "}
          <FaRegStickyNote className="inline text-green-600 mr-2" /> 3 recipies
        </p>
        <p className="font-medium text-sm">
          {" "}
          <FaHeart className="inline text-red-500 mr-2" /> 50 likes
        </p>
        <p className="text-sm mt-4">
          Arab sen is a highly successful chef based in Mumbai. He owns 5
          restaurant. He is a local celebrity. Known for great cooking and a
          warm smile, people come from all over the country to eat is special
          recipes.
        </p>
      </div>
      <div className="col-span-3 flex flex-col gap-3 border rounded-lg">
        <div className="flex  p-[40px] justify-between rounded-lg gap-3 bg-green-50">
          <div>
            <img
              className=" w-[400px] h-full  rounded-xl"
              src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-xl font-bold my-3">Grilled Salmon</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              pariatur eum cum ea officiis fugit, magni facilis corporis nam
              sequi cupiditate, earum nisi esse nemo minus libero adipisci
              totam? Repellendus!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm"> <span className="font-bold text-xl">Ingrident</span> Salt, Oil, Flower</p>
            <p className="text-sm"><DynamicStar height={15} width={15} className="border-2" rating={4.5} /> Rating 4.5</p>
            <button className="text-sm bg-green-400 font-bold text-white text-center h-[25px] rounded w-full"><FaHeart className="inline text-red-500 mr-2" /> Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipi;
