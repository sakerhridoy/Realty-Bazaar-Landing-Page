import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/Images/logo.png';
import { MdOutlineKeyboardArrowDown, MdLightMode, MdMenu, MdClose } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';

const Navbar = () => {
const [darkMode, setDarkMode] = useState(false);
const [showProfile, setShowProfile] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [propertyData, setPropertyData] = useState({ title: '', location: '', price: '' });
const [showPropertyForm, setShowPropertyForm] = useState(false);
const [formError, setFormError] = useState(null);

const firstInputRef = useRef(null);
const addPropertyButtonRef = useRef(null);

const toggleDarkMode = () => {
setDarkMode(prev => {
const newMode = !prev;
document.body.classList.toggle('dark', newMode);
return newMode;
});
};

const navItems = [
{ title: 'For Buyers', subItems: [{ name: 'Buy Property', href: '/buy-property' }, { name: 'Investment Tips', href: '/investment-tips' }, { name: 'Property Loan', href: '/property-loan' }] },
{ title: 'For Tenants', subItems: [{ name: 'Rent House', href: '/rent-house' }, { name: 'Roommate Finder', href: '/roommate-finder' }, { name: 'Rental Guide', href: '/rental-guide' }] },
{ title: 'For Dealers / Builders', subItems: [{ name: 'Post Property', href: '/post-property' }, { name: 'Advertisement Plans', href: '/advertisement-plans' }, { name: 'Builder Services', href: '/builder-services' }], isWide: true }
];

const anchorRefs = useRef([]);
const menuItemRefs = useRef([]);
const [openIndex, setOpenIndex] = useState(null);

const toggleAtIndex = index => setOpenIndex(prev => (prev === index ? null : index));

const handleAnchorKeyDown = (e, index) => {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
toggleAtIndex(index);
} else if (e.key === 'Escape') {
setOpenIndex(null);
anchorRefs.current[index]?.focus();
}
};

useEffect(() => {
if (showPropertyForm) setTimeout(() => firstInputRef.current?.focus(), 0);
const handleEscape = e => { if (e.key === 'Escape') setShowPropertyForm(false); };
if (showPropertyForm) document.addEventListener('keydown', handleEscape);
return () => document.removeEventListener('keydown', handleEscape);
}, [showPropertyForm]);

useEffect(() => {
if (!showPropertyForm && addPropertyButtonRef.current) addPropertyButtonRef.current.focus();
}, [showPropertyForm]);

return (
  <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed z-50">
    {' '}
    <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
      {/* Logo & Region */}{' '}
      <div className="flex items-center gap-4">
        {' '}
        <a href="/" aria-label="Go to homepage">
          {' '}
          <img src={logo} alt="Logo" className="w-36" />{' '}
        </a>{' '}
        <select className="hidden md:block w-24 rounded-full bg-gray-200 dark:bg-gray-700 text-sm text-center text-gray-900 dark:text-white py-1 px-2">
          {' '}
          <option value="all">All USA</option>{' '}
          <option value="california">California</option>{' '}
          <option value="new-york">New York</option>{' '}
          <option value="washington">Washington</option>{' '}
        </select>{' '}
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item, idx) => (
          <li key={item.title} className="relative group">
            <button
              className="flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={openIndex === idx}
              onClick={() => toggleAtIndex(idx)}
              onKeyDown={e => handleAnchorKeyDown(e, idx)}
              ref={el => (anchorRefs.current[idx] = el)}
            >
              {item.title} <MdOutlineKeyboardArrowDown className="text-lg" />
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md transition-all duration-200 z-10 ${
                openIndex === idx
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              } ${item.isWide ? 'w-52' : 'w-40'}`}
            >
              {item.subItems.map((subItem, sidx) => (
                <li
                  key={subItem.name}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <a href={subItem.href}>{subItem.name}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {/* Right Icons */}
      <div className="flex items-center gap-3">
        <button
          className="hidden md:flex text-2xl"
          onClick={toggleDarkMode}
          aria-label={`Toggle ${darkMode ? 'Light' : 'Dark'} Mode`}
        >
          <MdLightMode
            className={darkMode ? 'text-yellow-300' : 'text-gray-400'}
          />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            aria-expanded={showProfile}
          >
            <FaUserLock className="text-2xl text-gray-900 dark:text-white" />
          </button>
          {showProfile && (
            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 text-black dark:text-white shadow-xl rounded-md p-3">
              <p className="font-bold">User Profile</p>
              <p className="text-sm mt-1">Email: user@mail.com</p>
              <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded">
                Logout
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setShowPropertyForm(true)}
          className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
          ref={addPropertyButtonRef}
        >
          + Add Property
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl bg-white text-black transition-all duration-300"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>
    </div>
    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden fixed inset-0 bg-black/70 flex justify-center items-center -z-40">
        <ul className="bg-white dark:bg-gray-900 w-full h-full flex flex-col justify-center items-center gap-6 text-xl">
          {navItems.map(item => (
            <li key={item.title} className="text-center">
              {item.title}
              <ul className="mt-2 flex flex-col gap-2 text-base">
                {item.subItems.map(sub => (
                  <li key={sub.name}>
                    <a href={sub.href} onClick={() => setMobileMenuOpen(false)}>
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowPropertyForm(true);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              + Add Property
            </button>
          </li>
        </ul>
      </div>
    )}
    {/* Property Form Modal (unchanged from your previous code) */}
    {showPropertyForm && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div className="bg-white rounded-md w-[350px] p-5 shadow-2xl">
          <h2 className="text-xl font-bold mb-3 text-gray-900">
            Add New Property
          </h2>
          <input
            ref={firstInputRef}
            type="text"
            placeholder="Property Title"
            className="w-full border p-2 mb-3 rounded"
            value={propertyData.title}
            onChange={e =>
              setPropertyData(p => ({ ...p, title: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full border p-2 mb-3 rounded"
            value={propertyData.location}
            onChange={e =>
              setPropertyData(p => ({ ...p, location: e.target.value }))
            }
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full border p-2 mb-3 rounded"
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
                setPropertyData({ title: '', location: '', price: '' });
                setFormError(null);
              }}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (!propertyData.title.trim()) {
                  setFormError('Please enter a title');
                  return;
                }
                if (!propertyData.location.trim()) {
                  setFormError('Please enter a location');
                  return;
                }
                if (!propertyData.price || Number(propertyData.price) <= 0) {
                  setFormError('Enter a valid price');
                  return;
                }
                console.log('Property Submitted', propertyData);
                setShowPropertyForm(false);
                setPropertyData({ title: '', location: '', price: '' });
                setFormError(null);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )}
  </nav>
);
};

export default Navbar;
