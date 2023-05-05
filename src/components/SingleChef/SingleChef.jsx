import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { Slide } from "react-awesome-reveal";
const SingleChef = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chef;
  const navigate = useNavigate();
  const visitChef = (id) => {
    navigate(`/chef/${id}`);
  };
  return (
    <Slide direction="left" duration={2000}>
        <div className="flex flex-col items-center shadow-lg bg-white rounded-xl justify-center gap-8 p-4">
      <LazyLoad height={150}>
        <img
          className="w-[150px] rounded-[50%] h-[150px]"
          src={chef_picture}
          alt=""
        />
      </LazyLoad>

      <h2 className="text-2xl font-semibold">{chef_name}</h2>
      <div className="flex flex-col sm:flex-row rounded-xl px-4 justify-between items-center gap-4">
        <p className="text-sm flex flex-col items-center font-medium">
          {" "}
          <span className="font-bold text-2xl">{years_of_experience}</span>{" "}
          <span className="">years of experience</span>
        </p>
        <p className="text-sm flex-1 font-medium flex flex-col items-center">
          <span className="font-bold text-2xl">{number_of_recipes}</span>{" "}
          <span>Recipes</span>
        </p>
        <p className="text-sm flex-1 flex flex-col items-center  font-medium">
          {" "}
          <span className="font-bold text-2xl">{likes}</span>{" "}
          <span>
            {" "}
            <FaRegHeart className="text-red-500 inline" /> Like
          </span>
        </p>
      </div>
      <button
        onClick={() => visitChef(id)}
        className="font-medium bg-[#3A1C36] text-white border px-6 py-4 rounded-lg"
      >
        View Recipies
      </button>
    </div>
    </Slide>
  );
};

export default SingleChef;
