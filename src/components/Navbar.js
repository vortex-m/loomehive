import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TbMenu3 } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";
import { CiSearch, CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import Logo from "../assets/logo/logoMain.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowSearch, showSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [login, setLogin] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex items-center justify-between py-5 px-2 font-medium">
        <img
          src={Logo}
          className="lg:w-[12vw] w-[27vw]"
          alt="loomehive"
          onClick={() => navigate("/")}
        />

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collections"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <button onClick={() => setShowSearch(true)}>
            <CiSearch className="cursor-pointer" size={24} />
          </button>

          <div>
            <button onClick={() => navigate("/login")}>
              <CiUser className="cursor-pointer" size={24} />
            </button>
          </div>
          {login && (
            <div className="group relative">
              <button>
                <CiUser className="cursor-pointer" />
              </button>
              <div className="absolute dropdown-menu pt-4 right-0 bg-white shadow-md rounded-md p-4 hidden group-hover:block">
                <div className="flex flex-col gap-2 w-36 py-3 text-gray-500 rounded px-5">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
            </div>
          )}
          <Link to="/cart" className="relative">
            <button>
              <BsHandbag className="cursor-pointer" size={24} />
            </button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>

          <button onClick={handleMenu} className="sm:hidden">
            <TbMenu3 className="cursor-pointer" size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar and Backdrop */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          ></div>
          <div
            className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 transform ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300`}
          >
            <div className="flex justify-end p-4">
              <button onClick={closeMenu}>✖</button>
            </div>
            <ul className="flex flex-col gap-4 px-6 mt-4 text-gray-700">
              <NavLink
                to="/"
                className="hover:text-blue-500"
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/collections"
                className="hover:text-blue-500"
                onClick={closeMenu}
              >
                Collections
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-blue-500 "
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:text-blue-500"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
