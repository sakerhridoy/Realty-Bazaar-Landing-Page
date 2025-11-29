import React from 'react'
import logo from '../../assets/Images/logo.png'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showPropertyForm, setShowPropertyForm] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark');
    };

    return (
      <>
        <nav>
          <div className="container">
            <div className="flex py-[29px] gap-[197px] justify-between items-center">
              <div className="w-[20%]">
                <div className="flex gap-[18px] items-center">
                  <img
                    src={logo}
                    alt="logo- Realty Bazaar"
                    className="w-[147px]"
                  />
                  <select className="w-[90px] rounded-[22px] bg-[#EAEAEA] text-center text-[#072135] font-bold text-sm border-none outline-none focus:outline-none focus:ring-0 py-0.5 ps-[9px]">
                    <option value="all">All USA</option>
                    <option value="california">California</option>
                    <option value="new-york">New York</option>
                    <option value="washington">Washington</option>
                  </select>
                </div>
              </div>
              <div className="w-[80%] flex gap-[188px] justify-between items-center">
                <div className="menu">
                  <ul className="flex justify-between items-center gap-[30px]">
                    {/* Buyers */}
                    <li className="relative group cursor-pointer">
                      <a href="" className="flex items-center gap-1">
                        For Buyers
                        <MdOutlineKeyboardArrowDown className="text-lg inline-block" />
                      </a>

                      {/* Dropdown */}
                      <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Buy Property</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Investment Tips</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Property Loan</a>
                        </li>
                      </ul>
                    </li>

                    {/* Tenants */}
                    <li className="relative group cursor-pointer">
                      <a href="" className="flex items-center gap-1">
                        For Tenants
                        <MdOutlineKeyboardArrowDown className="text-lg inline-block" />
                      </a>

                      {/* Dropdown */}
                      <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Rent House</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Roommate Finder</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Rental Guide</a>
                        </li>
                      </ul>
                    </li>

                    {/* Dealers / Builders */}
                    <li className="relative group cursor-pointer">
                      <a href="" className="flex items-center gap-1">
                        For Dealers / Builders
                        <MdOutlineKeyboardArrowDown className="text-lg inline-block" />
                      </a>

                      {/* Dropdown */}
                      <ul className="absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Post Property</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Advertisement Plans</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="">Builder Services</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* Icons Group */}
                <div className="flex justify-between items-center gap-6">
                  {/* Mode Toggle */}
                  <div
                    className="mode w-8 h-8 cursor-pointer"
                    onClick={toggleDarkMode}
                  >
                    <MdLightMode
                      className={`text-3xl ${
                        darkMode ? 'text-yellow-300' : 'text-[#cacaca]'
                      }`}
                    />
                  </div>

                  {/* User Profile Toggle */}
                  <div
                    className="user w-8 h-8 cursor-pointer relative"
                    onClick={() => setShowProfile(!showProfile)}
                  >
                    <FaUserLock className="text-3xl text-[#072135]" />

                    {showProfile && (
                      <div className="absolute right-0 mt-3 w-[180px] bg-white shadow-xl rounded-md p-3 text-black z-50">
                        <p className="font-bold">User Profile</p>
                        <p className="text-sm mt-1">Email: user@mail.com</p>
                        <button className="mt-2 w-full bg-[#072135] text-white py-1 rounded-sm">
                          Logout
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Add Property Button */}
                  <div
                    onClick={() => setShowPropertyForm(true)}
                    className="property bg-[#38A9FF] rounded-sm h-9 px-3 cursor-pointer flex items-center"
                  >
                    <span className="font-arial font-bold text-base text-white">
                      + Add Property
                    </span>
                  </div>
                </div>

                {/* Add Property Modal */}
                {showPropertyForm && (
                  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-md w-[350px] p-5 shadow-2xl">
                      <h2 className="text-xl font-bold mb-3 text-[#072135]">
                        Add New Property
                      </h2>

                      <input
                        type="text"
                        placeholder="Property Title"
                        className="w-full border p-2 mb-3 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full border p-2 mb-3 rounded"
                      />
                      <input
                        type="number"
                        placeholder="Price"
                        className="w-full border p-2 mb-3 rounded"
                      />

                      <div className="flex justify-between">
                        <button
                          onClick={() => setShowPropertyForm(false)}
                          className="px-4 py-2 bg-gray-400 rounded text-white"
                        >
                          Cancel
                        </button>
                        <button className="px-4 py-2 bg-[#38A9FF] text-white rounded">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  };

  export default Navbar;