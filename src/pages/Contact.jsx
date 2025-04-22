import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex h-[80vh]">
      {/* Sidebar */}
      <div className="w-1/9 h-1/3 bg-gray-800 text-white rounded-2xl p-6 space-y-4 mt-[15%] ml-[5%]">
        <NavLink
          to="contact-form"
          className={({ isActive }) =>
            isActive
              ? "block text-white font-bold"
              : "block text-gray-300 hover:text-white"
          }
        >
          Contact Us Form
        </NavLink>
        <NavLink
          to="emails"
          className={({ isActive }) =>
            isActive
              ? "block text-white font-bold"
              : "block text-gray-300 hover:text-white"
          }
        >
          Emails
        </NavLink>
        <NavLink
          to="locations"
          className={({ isActive }) =>
            isActive
              ? "block text-white font-bold"
              : "block text-gray-300 hover:text-white"
          }
        >
          Locations
        </NavLink>
        <NavLink
          to="phones"
          className={({ isActive }) =>
            isActive
              ? "block text-white font-bold"
              : "block text-gray-300 hover:text-white"
          }
        >
          Phone Numbers
        </NavLink>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center text-2xl font-medium">
        <Outlet />
      </div>
    </div>
  );
};

export default Contact;
