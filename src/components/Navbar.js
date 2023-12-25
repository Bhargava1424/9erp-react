import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchIconClick = () => {
    setSearchMode(true);
  };

  const handleDropdownIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
    setSearchQuery('');
    setSearchMode(false);
  };

  const handleInputBlur = () => {
    setSearchQuery('');
    setSearchMode(false);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle" onClick={handleDropdownIconClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          {dropdownVisible && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/add-student'>Add Student</Link></li>
              <li><Link to='/add-attribute'>Add Attribute</Link></li>
              <li><Link to='/reports'>Reports</Link></li>
              <li><Link to='/add-receipt'>Add Receipt</Link></li>
              <li><Link to='/list-receipts'>List Receipts</Link></li>
            </ul>
          )}
        </div>
        <div>
          <button className="btn btn-active btn-primary" ><Link to='/'>Home</Link></button>
        </div>
      </div>

      <div className="navbar-center">
        <div className="logo-container">
          <img src="/9logo.jpg" alt="College ERP Logo" />
        </div>
      </div>

      <div className="navbar-end">
        {searchMode ? (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              value={searchQuery}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              autoFocus
            />
          </form>
        ) : (
          <button className="btn btn-ghost btn-circle" onClick={handleSearchIconClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        )}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
