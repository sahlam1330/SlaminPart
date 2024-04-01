import React, { useState } from "react";
import {
  Route, Routes, 
  NavLink, 
  HashRouter
} from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Inventory from "./Components/Inventory/Inventory";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";


function Main() {

  
  const [value, setValue] = useState('');

  const onChange = (event) => {
      setValue(event.target.value);
  }

  const onSearch = (searchTerm) => {
      console.log('search', searchTerm);
  }

    return (
      <HashRouter>
        <div >
          <div className="main-page"> 
                <h1 className="title">Slamin Parts<span className="profile"><button><h1><NavLink to="/checkout">Check Out</NavLink></h1></button>
                <button><h1><NavLink to="/">Sign In</NavLink></h1></button></span></h1>
          <ul className="header-tabs">
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/inventory">Inventory</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
          </ul>
          </div>
          <div className="search_bar">
            <button className="search_btn" onClick={() => onSearch(value) }>Search</button>  
            <span className="search_field"><input type="text" value={value} onChange={onChange} id="search"></input></span>
          </div>
          <div className="tabs">       
          <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }

export default Main;
