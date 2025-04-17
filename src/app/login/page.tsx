"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { CiUser, CiLock} from 'react-icons/ci';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { handleLogInSubmit } from '../validations/loginValid'


export default function LogIn() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="box">
      <div className="inner-box">
        <h2>Login</h2>
        <form onSubmit={handleLogInSubmit}>

          <div className="input-box">
            <p>Username</p>
            <CiUser className="icons"/>
            <input required type="text" placeholder="Enter your username"></input>
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
            <Link href="/signup" className="sign-up-link">SIGN UP</Link>
          </div>
        </form>

        </div>
    </div>
  );
}

