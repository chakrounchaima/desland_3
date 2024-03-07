import React, { useState } from 'react';
import Login from '../../components/Login';
import Signup from '../../components/Signup';

const Home = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchForm = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <>
      {isLoginMode ? (
        <Login onSwitchForm={switchForm} />
      ) : (
        <Signup onSwitchForm={switchForm} />
      )}
    </>
  );
};

export default Home;
