import React from "react";
import DigitalTools from "./main/section/DigitalTools";
const Header = ({ length }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky z-10 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className=" text-3xl font-bold text-[#4f39f6]">DigiTols</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div className="relative p-5">
            <div className="text-xl">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div
              className={`w-4 h-4 text-white p-2 text-xs flex justify-center items-center bg-red-500 rounded-full absolute top-3 right-3 ${length === 0 ? "hidden" : ""}`}
            >
              {length}
            </div>
          </div>
          <span>Login</span>
          <button className="button">
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
