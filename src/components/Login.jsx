const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form className="login">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        /> <br />

        <input type="submit" value="Login" />
      </form>

      <h6>Don`t have an account?</h6>
    </>
  );
};

export default Login;
