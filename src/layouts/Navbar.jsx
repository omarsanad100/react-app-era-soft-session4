import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="text-2xl font-semibold text-gray-800">Logo</div>
      <div className="flex space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold bg-gray-100 px-3 py-1 rounded"
              : "text-gray-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold bg-gray-100 px-3 py-1 rounded"
              : "text-gray-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold bg-gray-100 px-3 py-1 rounded"
              : "text-gray-500"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold bg-gray-100 px-3 py-1 rounded"
              : "text-gray-500"
          }
        >
          Contact us
        </NavLink>
      </div>
      <button className="bg-gray-800 text-white px-6 py-2 rounded-full">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
