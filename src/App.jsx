import "./App.css";
import Home from "./pages/StaticPages/Home";
import Joboffer from "./pages/StaticPages/Joboffer";
import Trend from "./pages/StaticPages/Trend";
import Challenge from "./pages/StaticPages/Challenge";
import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
// import Signup from "./components/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
         
     
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Joboffer" element={<Joboffer />} />
          <Route path="/Trend" element={<Trend />} />
          <Route path="/Challenge" element={<Challenge />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
