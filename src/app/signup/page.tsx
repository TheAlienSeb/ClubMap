"use client";

import Link from 'next/link';
import { handleSignUpSubmit } from '../validations/signupValid'

import { CiUser, CiLock, CiMail } from 'react-icons/ci';

export default function SignUp() {

  return (
    <div className="signup-box">
      <div className="inner-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>

          <div className="sign-input-box">
            <p>Username</p>
            <CiUser className="icons" />
            <input required type="text" placeholder="Enter your username"></input>
          </div>

          <div className="sign-input-box">
            <p>Password</p>
            <CiLock className="icons" />
            <input required type="text" placeholder="Enter your password"></input>
          </div>

          <div className="sign-input-box">
            <p>Confirm Password</p>
            <CiLock className="icons" />
            <input required type="text" placeholder="Re-Enter your password"></input>
          </div>

          <div className="sign-input-box">
            <p>Email</p>
            <CiMail className="mail-icon" />
            <input required type="text" placeholder="Enter your email"></input>
          </div>

          <div className="sign-input-box">
            <p>Confirm Email</p>
            <CiMail className="mail-icon" />
            <input required type="text" placeholder="Re-Enter your email"></input>
          </div>

          <button type="submit" className="btn">SIGNUP</button>

          <div className="sign-up">
            <p>Already have an account?</p>
            <Link href="/login" className="log-in-link">LOGIN</Link>
          </div>
        </form>

      </div>
    </div>
  );
}