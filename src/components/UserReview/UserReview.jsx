import React from "react";
import './UserReview.css';
import LazyLoad from "react-lazy-load";
const UserReview = () => {
  return (
    <div className="mt-[60px] py-4">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item review-one relative w-full">
         <LazyLoad>
         <img
            src=""
            className="w-full"
          />
         </LazyLoad>
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white">
                <LazyLoad>
                <img className="w-[100px] h-[100px] rounded-[50%] mx-auto" src="https://images.pexels.com/photos/6333498/pexels-photo-6333498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </LazyLoad>
                <p className="mx-auto text-sm md:text-base w-full md:w-[56%] text-center mt-4">The food was absolutely amazing! Every bite was bursting with flavor and cooked to perfection. I highly recommend this restaurant to anyone looking for an unforgettable dining experience.</p>
                <p className="mx-auto w-[56%] text-center mt-2">-Evan Miles</p>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item review-two relative w-full">
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white">
                <LazyLoad>
                <img className="w-[100px] h-[100px] rounded-[50%] mx-auto" src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </LazyLoad>
                <p className="mx-auto w-full text-sm md:text-base md:w-[56%] text-center mt-4">I couldn't have asked for a better meal! From the appetizers to the dessert, every dish was impeccably crafted with the freshest ingredients and expertly balanced flavors. The service was also top-notch, making for a truly delightful evening..</p>
                <p className="mx-auto w-[56%] text-center mt-2">-Ibrahim David</p>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item review-three relative w-full">
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white">
                <LazyLoad>
                <img className="w-[100px] h-[100px] rounded-[50%] mx-auto" src="https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </LazyLoad>
                <p className="mx-auto w-full text-sm md:text-base md:w-[56%] text-center mt-4">The food at this restaurant is simply outstanding. The dishes were creative, beautifully presented, and tasted as good as they looked. The staff were friendly and attentive, making for a memorable dining experience. I will definitely be returning!.</p>
                <p className="mx-auto w-[56%] text-center mt-2">-Thomas Roy</p>
            </div>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default UserReview;
