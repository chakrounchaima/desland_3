import React, { useState } from 'react';

const Login = ({ onSwitchForm }) => {
  const [isLogin, setIsLogin] = useState(true);

  const switchMode = () => {
    setIsLogin(!isLogin);
    onSwitchForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted for ${isLogin ? 'Login' : 'Sign Up'}`);
  };

  return (
    <>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <br />

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <h6>
        {isLogin
          ? "Don't have an account? "
          : 'Already have an account? '}
        <span onClick={switchMode}>{isLogin ? 'Sign Up' : 'Login'}</span>
      </h6>
    </>
  );
};

export default Login;
