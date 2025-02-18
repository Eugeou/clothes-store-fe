import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-setup/store";

// import page
import Header from "./shared/components/Layout/Header";
import Home from "./Home";
import Footer from "./shared/components/Layout/Footer";
import Checkout from "./Checkout";
import About from "./About";
import Blog from "./Blog";
import Cart from "./Cart";
import Contact from "./Contact";
import Services from "./Services";
import Shop from "./Shop";

const App = () => {
  const location = useLocation();
  const noHeaderFooter = ['/signin','/signup','/forgetpassword','/emailverification','/verificationstep2'];
  


    return(
      <div>
        {!noHeaderFooter.includes(location.pathname) && <Header/>}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/shop" element={<Shop/>}/>
            
            {/* <Route path="*" element={<NotFound/>}/> */}

          </Routes>
          {!noHeaderFooter.includes(location.pathname) && <Footer/>}
      </div>
    )
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}


export default AppWrapper;

