import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import GoogleOAuthButton from "./GoogleOAuthLogin";
import DashBoardContainer from "./DashboardContainer";

const LoginSignupPage = (props) => {
  return (
    <div>
      <h1 className="app-name">Follow Fit</h1>
      <p className="tagline-copy">
        Never go without a workout plan again. Share your daily workout with
        friends, and follow the plans of others from your favorite celebrities
        and influencers to the world’s best athletes and coaches.
      </p>
      <p>
        Never go without a workout plan again. Share your daily workout with
        friends, and follow the plans of others from your favorite celebrities
        and influencers to the world’s best athletes and coaches.
      </p>
      <p>
        Never go without a workout plan again. Share your daily workout with
        friends, and follow the plans the world’s top athletes, coaches, and
        trainers.
      </p>
      <h3 className="tagline">marketing copy placeholder</h3>
      <LoginForm />
      <SignupForm />
      <GoogleOAuthButton />

      <nav>
        <Link to="/mainpage"> Mainpage </Link>
      </nav>

      <img
        src="https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="login-page-background-image"
        style={{ width: "100vw" }}
      ></img>
    </div>
  );
};

export default LoginSignupPage;
