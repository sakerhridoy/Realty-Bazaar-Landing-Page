import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/Images/logo.png';
import { MdOutlineKeyboardArrowDown, MdLightMode } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';

const Navbar = () => {
  // Consolidated state for component-specific UI toggles
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [propertyData, setPropertyData] = useState({
    title: '',
    location: '',
    price: '',
  });
  const [formError, setFormError] = useState(null);

  // Refs for modal focus management
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const addPropertyButtonRef = useRef(null);

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

  // Ref arrays to manage focus for dropdown anchors and menu items
  const anchorRefs = useRef([]);
  const menuItemRefs = useRef([]);

  // Index of the currently open dropdown, or null
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // When a dropdown opens, focus its first menu item (if present)
    if (openIndex !== null) {
      const first = menuItemRefs.current[openIndex]?.[0];
      if (first) first.focus();
    }
  }, [openIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleDocClick(e) {
      // If clicking outside any anchor or dropdown item, close all
      const clickedAnchor = anchorRefs.current.some(
        ref => ref && ref.contains(e.target)
      );
      const clickedMenu = menuItemRefs.current.some(
        arr => arr && arr.some(el => el && el.contains && el.contains(e.target))
      );
      if (!clickedAnchor && !clickedMenu) setOpenIndex(null);
    }

    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const toggleAtIndex = index =>
    setOpenIndex(prev => (prev === index ? null : index));

  const handleAnchorKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAtIndex(index);
    } else if (e.key === 'Escape') {
      setOpenIndex(null);
      // Return focus to the anchor
      const anchor = anchorRefs.current[index];
      if (anchor) anchor.focus();
    }
  };

  // When modal opens, focus the first input and add an Escape close handler
  useEffect(() => {
    if (showPropertyForm) {
      // small delay to allow rendering
      setTimeout(() => firstInputRef.current?.focus(), 0);
    }

    function handleEscape(e) {
      if (e.key === 'Escape') setShowPropertyForm(false);
    }

    if (showPropertyForm) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showPropertyForm]);

  // return focus to the Add Property button when closing the modal
  useEffect(() => {
    if (!showPropertyForm && addPropertyButtonRef.current) {
      addPropertyButtonRef.current.focus();
    }
  }, [showPropertyForm]);

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
                  {navItems.map((item, idx) => (
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
                        aria-expanded={openIndex === idx}
                        aria-controls={`menu-${idx}`}
                        onClick={e => {
                          e.preventDefault();
                          toggleAtIndex(idx);
                        }}
                        onKeyDown={e => handleAnchorKeyDown(e, idx)}
                        ref={el => (anchorRefs.current[idx] = el)}
                      >
                        {item.title}
                        <MdOutlineKeyboardArrowDown className="text-lg inline-block" />
                      </a>

                      {/* Dropdown */}
                      <ul
                        id={`menu-${idx}`}
                        className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 invisible transition-all duration-200 z-10 ${
                          item.isWide ? 'w-[200px]' : 'w-40'
                        } ${
                          openIndex === idx
                            ? 'opacity-100 visible'
                            : 'group-hover:opacity-100 group-hover:visible'
                        }`}
                        role="menu"
                      >
                        {item.subItems.map((subItem, sidx) => (
                          <li
                            key={subItem.name}
                            className="px-4 py-2 hover:bg-gray-100"
                            role="none"
                          >
                            <a
                              href={subItem.href}
                              role="menuitem"
                              ref={el => {
                                menuItemRefs.current[idx] =
                                  menuItemRefs.current[idx] || [];
                                menuItemRefs.current[idx][sidx] = el;
                              }}
                              tabIndex={openIndex === idx ? 0 : -1}
                            >
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
                      <p className="text-sm mt-1">Email: user@mail.com</p>
                      <button className="mt-2 w-full bg-[#072135] text-white py-1 rounded-sm">
                        Logout
                      </button>
                    </div>
                  )}
                </div>

                {/* Add Property Button */}
                <button
                  type="button"
                  onClick={() => setShowPropertyForm(true)}
                  className="property bg-[#38A9FF] rounded-sm h-9 px-3 cursor-pointer flex items-center"
                  aria-controls="add-property-modal"
                  aria-expanded={showPropertyForm}
                  ref={addPropertyButtonRef}
                >
                  <span className="font-arial font-bold text-base text-white">
                    + Add Property
                  </span>
                </button>
              </div>
              {showPropertyForm && (
                <div
                  className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
                  role="dialog"
                  aria-modal="true"
                  id="add-property-modal"
                  onClick={e => {
                    // only close when clicking the backdrop (not when clicking inside modal)
                    if (e.target === e.currentTarget)
                      setShowPropertyForm(false);
                  }}
                >
                  <div
                    ref={modalRef}
                    className="bg-white rounded-md w-[350px] p-5 shadow-2xl"
                    role="document"
                    aria-labelledby="add-property-title"
                    onKeyDown={e => {
                      // basic focus trap inside modal
                      if (e.key === 'Tab') {
                        const nodes = modalRef.current?.querySelectorAll(
                          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                        );
                        if (!nodes || nodes.length === 0) return;
                        const focusable = Array.from(nodes).filter(
                          n =>
                            n.offsetWidth > 0 ||
                            n.offsetHeight > 0 ||
                            n === document.activeElement
                        );
                        const first = focusable[0];
                        const last = focusable[focusable.length - 1];

                        if (e.shiftKey && document.activeElement === first) {
                          e.preventDefault();
                          last.focus();
                        } else if (
                          !e.shiftKey &&
                          document.activeElement === last
                        ) {
                          e.preventDefault();
                          first.focus();
                        }
                      }
                    }}
                  >
                    <h2 className="text-xl font-bold mb-3 text-[#072135]">
                      <span id="add-property-title">Add New Property</span>
                    </h2>
                    <input
                      ref={firstInputRef}
                      type="text"
                      placeholder="Property Title"
                      className="w-full border p-2 mb-3 rounded"
                      aria-label="Property Title"
                      value={propertyData.title}
                      onChange={e =>
                        setPropertyData(p => ({ ...p, title: e.target.value }))
                      }
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full border p-2 mb-3 rounded"
                      aria-label="Location"
                      value={propertyData.location}
                      onChange={e =>
                        setPropertyData(p => ({
                          ...p,
                          location: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      className="w-full border p-2 mb-3 rounded"
                      aria-label="Price"
                      value={propertyData.price}
                      onChange={e =>
                        setPropertyData(p => ({ ...p, price: e.target.value }))
                      }
                    />
                    {formError && (
                      <p className="text-sm text-red-600 mb-3">{formError}</p>
                    )}

                    <div className="flex justify-between">
                      <button
                        onClick={() => {
                          setShowPropertyForm(false);
                          setPropertyData({
                            title: '',
                            location: '',
                            price: '',
                          });
                          setFormError(null);
                        }}
                        className="px-4 py-2 bg-gray-400 rounded text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          // validation
                          if (!propertyData.title.trim()) {
                            setFormError('Please enter a property title.');
                            return;
                          }
                          if (!propertyData.location.trim()) {
                            setFormError('Please enter a location.');
                            return;
                          }
                          if (
                            !propertyData.price ||
                            Number(propertyData.price) <= 0
                          ) {
                            setFormError(
                              'Please enter a valid price greater than 0.'
                            );
                            return;
                          }

                          // propagate / submit (placeholder — replace with real handler)
                          try {
                            // Dispatch a custom event so parent components can listen if needed
                            window.dispatchEvent(
                              new CustomEvent('realty:addProperty', {
                                detail: propertyData,
                              })
                            );
                          } catch (err) {
                            console.log('Submitted property', propertyData);
                          }

                          // reset + close
                          setShowPropertyForm(false);
                          setPropertyData({
                            title: '',
                            location: '',
                            price: '',
                          });
                          setFormError(null);
                        }}
                        className="px-4 py-2 bg-[#38A9FF] text-white rounded"
                      >
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
