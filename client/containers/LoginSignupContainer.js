import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
} from 'react-router-dom';
import LoginForm from './../components/LoginForm';
import SignupForm from './../components/SignupForm';
import {
  gymImage,
  File1,
  File2,
  File3,
  File4,
  File5,
  File6,
  File7,
  File8,
} from '../images/index.js';
// import GoogleOAuthButton from './../GoogleOAuthLogin';

const images = [
  gymImage,
  File1,
  File2,
  File3,
  File4,
  File5,
  File6,
  File7,
  File8,
];

// setInterval(changeBg, 1000);
const bg = images[Math.floor(Math.random() * images.length)];

const styles = {
  backgroundImage: `url(${gymImage})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
};

const LoginSignupContainer = (props) => {
  return (
    <div style={styles}>
      {/* // <div className='image' style="background-image: url('../gymImage.jpeg')"> */}
      <div>
        <div className='pt-10 '>
          <div className='app-title'>fit haús</div>
          <div className='app-description'>
            Never go without a workout plan again. <br></br>
            Share your daily workout with friends. <br></br>
            Follow the exercise programming of celebs, fitness stars, and top
            athletes and coaches.
          </div>
        </div>

        <div className='my-5'>
          <LoginForm />

          <SignupForm />
          {/* <GoogleOAuthButton /> */}
        </div>
        {/* <nav><Link to="/mainpage"> Mainpage </Link></nav> */}

        {/* <img
        src="https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="login-page-background-image"
        style={{ width: "100vw" }}
      ></img> */}
      </div>
    </div>
  );
};

export default LoginSignupContainer;

//https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
