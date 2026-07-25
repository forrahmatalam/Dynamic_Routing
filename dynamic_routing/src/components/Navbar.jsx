import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      
      <h1 className="text-xl font-bold">
        MyWebsite
      </h1>

      <div className="flex gap-6">
       <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
         <NavLink to="/product">Product</NavLink>
      </div>
<button>Login</button>
    </nav>
  );
};

export default Navbar;