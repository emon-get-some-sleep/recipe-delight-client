import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LazyLoad from "react-lazy-load";
import { Slide } from "react-awesome-reveal";

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[50px]">
      <Navbar></Navbar>

      <div className="h-full flex items-center justify-center">
        <Slide direction="left" duration={2000}>
          <LazyLoad>
            <img
              src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1683139611~exp=1683140211~hmac=33ce0351c3313b94116695c877a89235e5ec6834cdff254200d453e7542ad8da"
              alt=""
            />
          </LazyLoad>
        </Slide>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
