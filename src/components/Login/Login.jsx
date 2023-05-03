import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen mt-[60px] rounded-lg overflow-hidden flex items-center justify-center bg-green-300">
      <div className="bg-white w-[400px] rounded-[10px]">
        <h1 className="text-center pb-5 border-b text-2xl font-bold py-4">Login</h1>
        <form className="px-[40px]">
          <div className="relative my-[30px] border-b border-[#adadad]">
            <input className="w-full login-form px-[5px] h-[40px] text-sm border-0 bg-none outline-none" type="email" name="email" required/>
            <span className="optional"></span>
            <label className="text-sm duration-500 absolute top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]"><span className="hi">Enter Email</span></label>
          </div>
          <div className="relative my-[30px] border-b border-[#adadad] ">
            <input className="w-full login-form px-[5px] h-[40px] bg-none outline-none text-sm" type="password" name="password" required/>
            <span className="optional"></span>
            <label className="text-sm absolute duration-500 top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">Enter Password</label>
          </div>
          <div className="mb-5 ml-[5px] -mt-5px text-sm text-[#a6a6a6] cursor-pointer hover:underline">Forgot Password?</div>
          <input className="h-[50px] w-full bg-[#2691d9] border rounded-[25px] text-lg text-white font-bold cursor-pointer outline-none hover:border-[#2691d9] duration-500" type="submit" value="Login" />
          <div>
            <p className="my-[30px] text-center font-medium text-sm text-[#666666] ">
              New to recipi delight? <Link className="text-[#2691d9] hover:underline" to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
