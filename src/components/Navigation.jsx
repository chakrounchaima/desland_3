import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
      <>
      
      <div className="container">   
<h1 className="title">Des</h1>
<h2 className="name">land</h2>
<p>Every great design begins with an even better story.</p>
</div>
<Link className="navigation ">
<ul>
  <li>
                 
<NavLink className="btn" to="/Home">Home</NavLink>
  </li>
</ul>
<ul>
  <li>
  <NavLink className="btn" to="/Joboffer">Joboffer</NavLink>           
                  
  </li>
</ul>
<ul>
  <li>
  <NavLink className="btn" to="/Challenge">Challenge</NavLink>  
  </li>
</ul>
<ul>
  <li>
  <NavLink className="btn" to="/Trend">Trend</NavLink>  
  </li>
</ul>


              </Link>
            

      
      </>
  )
}

export default Navigation



