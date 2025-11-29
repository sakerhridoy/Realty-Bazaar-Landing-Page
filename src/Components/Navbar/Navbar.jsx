import React, { useState } from 'react';
import logo from '../../assets/Images/logo.png';
import { MdOutlineKeyboardArrowDown, MdLightMode } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';

const Navbar = () => {
  // Consolidated state for component-specific UI toggles
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPropertyForm, setShowPropertyForm] = useState(false);

  // Toggle dark mode and apply/remove the 'dark' class to the document body
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark', newMode); // Use a boolean argument for better control
      return newMode;
    });
  };

  const navItems = [
    {
      title: 'For Buyers',
      subItems: [
        { name: 'Buy Property', href: '/buy-property' },
        { name: 'Investment Tips', href: '/investment-tips' },
        { name: 'Property Loan', href: '/property-loan' },
      ],
    },
    {
      title: 'For Tenants',
      subItems: [
        { name: 'Rent House', href: '/rent-house' },
        { name: 'Roommate Finder', href: '/roommate-finder' },
        { name: 'Rental Guide', href: '/rental-guide' },
      ],
    },
    {
      title: 'For Dealers / Builders',
      subItems: [
        { name: 'Post Property', href: '/post-property' },
        { name: 'Advertisement Plans', href: '/advertisement-plans' },
        { name: 'Builder Services', href: '/builder-services' },
      ],
      isWide: true, // For the larger dropdown width
    },
  ];

  return (
    <>
      <nav>
        <div className="container">
          <div className="flex py-[29px] gap-[170px] justify-between items-center">
            <div className="w-[20%]">
              <div className="flex gap-[18px] items-center">
                <a href="/" aria-label="Go to homepage">
                  <img
                    src={logo}
                    alt="Realty Bazaar Logo"
                    className="w-[147px]"
                  />
                </a>
                <select
                  name="region-select"
                  aria-label="Select Region"
                  className="w-[90px] rounded-[22px] bg-[#EAEAEA] text-center text-[#072135] font-bold text-sm border-none outline-none focus:outline-none focus:ring-0 py-0.5 ps-[9px]"
                >
                  <option value="all">All USA</option>
                  <option value="california">California</option>
                  <option value="new-york">New York</option>
                  <option value="washington">Washington</option>
                </select>
              </div>
            </div>
            <div className="w-[80%] flex gap-[170px] justify-between items-center">
              {/* Navigation Menu */}
              <div className="menu">
                <ul
                  className="flex justify-between items-center gap-5"
                  role="menubar"
                >
                  {navItems.map(item => (
                    <li
                      key={item.title}
                      className="relative group cursor-pointer"
                      role="none" // Item role is not strictly needed for list item if children have proper roles
                    >
                      {/* SEO/Accessibility Improvement: Use role="menuitem" or correct <a> href for actual links */}
                      <a
                        href="#" // Use '#' as a placeholder, would be a real link in a production app
                        className="flex items-center gap-1"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {item.title}
                        <MdOutlineKeyboardArrowDown className="text-lg inline-block" />
                      </a>

                      {/* Dropdown */}
                      <ul
                        className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 ${
                          item.isWide ? 'w-[200px]' : 'w-40'
                        }`}
                        role="menu"
                      >
                        {item.subItems.map(subItem => (
                          <li
                            key={subItem.name}
                            className="px-4 py-2 hover:bg-gray-100"
                            role="none"
                          >
                            <a href={subItem.href} role="menuitem">
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icons Group */}
              <div className="flex justify-between items-center gap-3">
                {/* Mode Toggle */}
                <div
                  className="mode w-8 h-8 cursor-pointer"
                  onClick={toggleDarkMode}
                  role="button"
                  aria-label={`Toggle ${darkMode ? 'Light' : 'Dark'} Mode`}
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
                  role="button"
                  aria-expanded={showProfile}
                  aria-label="Toggle User Profile"
                >
                  <FaUserLock className="text-3xl text-[#072135]" />

                  {/* Profile Dropdown */}
                  {showProfile && (
                    <div className="absolute right-0 mt-3 w-[180px] bg-white shadow-xl rounded-md p-3 text-black z-50">
                      <p className="font-bold">User Profile</p>
                      {/* Backend Friendly: This would likely come from an auth context or API */}
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
                  role="button"
                  aria-controls="add-property-modal"
                >
                  <span className="font-arial font-bold text-base text-white">
                    + Add Property
                  </span>
                </div>
              </div>
              {showPropertyForm && (
                <div
                  className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
                  role="dialog"
                  aria-modal="true"
                  id="add-property-modal"
                >
                  <div className="bg-white rounded-md w-[350px] p-5 shadow-2xl">
                    <h2 className="text-xl font-bold mb-3 text-[#072135]">
                      Add New Property
                    </h2>
                    <input
                      type="text"
                      placeholder="Property Title"
                      className="w-full border p-2 mb-3 rounded"
                      aria-label="Property Title"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full border p-2 mb-3 rounded"
                      aria-label="Location"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      className="w-full border p-2 mb-3 rounded"
                      aria-label="Price"
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
