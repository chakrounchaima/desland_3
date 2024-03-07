

const Signup = () => {
  return (
      <>
         <h1>sign up </h1>
          <form className="sign-up" >
          <input className="mini-input" type="text" placeholder="First name">First name</input>
              <input className="mini-input" type="text" placeholder="Last name">Last name</input>
              <input type="email" placeholder="email">Email</input>
              <input type="password" placeholder="Password">Password</input>
              <input type="password" placeholder=" Confirm password">Confirm password</input>
              <input type="checkbox">I agree with privacy and policy </input>
              <button type="submit">Sign up</button>

          </form>
          <p> Already have an account  ? </p>
        


        
          
      </>
  )
}

export default Signup
