/* eslint-disable no-unused-vars */
import React from 'react';
import picture from '../images/undraw_secure_login_pdn4.svg';

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row p-4 md:p-0 md:flex-row-reverse">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
          <p className="text-gray-600 mb-4">Please Enter Your Details</p>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <input
                className="w-full p-2 border rounded placeholder-gray-400"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-2 border rounded placeholder-gray-400"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-2 border rounded placeholder-gray-400"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded w-full" type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div className="md:w-1/2">
          <img className="w-full" src={picture} alt="Secure Login" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
