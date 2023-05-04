import React, { useContext, useState } from "react";
import './Login.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Login = () => {
  const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  // console.log(from)
  
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      form.reset();
      navigate(from, {replace: true});
    })
    .catch(error => {
      setError(error.message);
    })
  } 

  const googleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      navigate(from, {replace: true});
    })
    .catch(error => {
      setError(error.message);
    })
  }
  const githubSignIn = () => {
    signInWithGithub()
    .then(result => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      navigate(from, {replace: true});
    })
    .catch(error => {
      setError(error.message);
    })
  }
  return (
    <div className="h-screen mt-[60px] rounded-lg overflow-hidden flex items-center justify-center bg-green-300">
      <div className="bg-white w-[400px] rounded-[10px]">
        <h1 className="text-center pb-5 border-b text-2xl font-bold py-4">Login</h1>
        <form onSubmit={handleLogin} className="px-[40px]">
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
        {
          error && <p className="text-red-500 text-center my-2 font-bold text-sm">{error}</p>
        }
        <div className="flex  items-center justify-center gap-4 pb-2">
          <button onClick={googleSignIn} className="text-center text-sm border border-[#2691d9] hover:-translate-y-[5px] duration-500  rounded-lg h-[50px] p-2">
            {" "}
            <FaGoogle className="inline" /> Login with Google
          </button>
          <button onClick={githubSignIn} className="text-center text-sm border border-[#2691d9] hover:-translate-y-[5px] duration-500  rounded-lg h-[50px] p-2">
            {" "}
            <FaGithub className="inline" /> Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
