"use client";

import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



export default function Home() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="box">
      <div className="inner-box">
        <h2>Login</h2>
        <form action="#">

          <div className="input-box">
            <p>Username</p>
            <CiUser className="icons"/>
            <input required type="user" placeholder="Enter your username"></input>
          </div>

          <div className="input-box">
            <p>Password</p>
            <CiLock className="icons"/>
            <input required type={showPassword ? "text" : "password"} placeholder="Enter your password"></input>
          </div>

          
          <div className="view-password">
              {showPassword ? 
              (<FaEyeSlash className="eye-icon" onClick={() => setShowPassword(false)} />) :
              (<FaEye className="eye-icon" onClick={() => setShowPassword(true)} />)
              }
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox"></input>Remember Me</label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">LOGIN</button>

          <div className="sign-up">
            <p>Don't have an account?</p>
            <a href="#" className="sign-up-link">SIGN UP</a>
          </div>
        </form>

        </div>
    </div>
  );
}


