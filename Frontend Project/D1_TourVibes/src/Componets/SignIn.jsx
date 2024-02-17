import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { InputControl } from "./InputControl";
import Footer from "./Footer";

export const SignIn = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-md p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>

          <form className="flex flex-col space-y-4">
            <InputControl label="Name" placeholder="Enter Your Name" type="text" />

            <InputControl label="Email" placeholder="Enter Email Address" type="email" />

            <InputControl label="Password" placeholder="Enter Password" type="password" />

            <button
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/LogIn" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};
