import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ userRole }) {
  console.log("Navbar User Role:", userRole);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const colors = ['#000000', '#FF0000', '#0000FF']; // Black, Red, Blue

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <>
      <div className="navbar bg-base-100 custom-navbar-padding">
        <div className="navbar-start">
          {userRole && (
            <div className="dropdown relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={toggleDropdown}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              {isDropdownOpen && (
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/AddStudent'>AddStudent</Link></li>
                  <li><Link to='/AddAttribute'>AddAttribute</Link></li>
                  <li><Link to='/Reports'>Reports</Link></li>
                  <li><Link to='/AddReceipts'>AddReceipts</Link></li>
                  <li><Link to='/ListReceipts'>ListReceipts</Link></li>
                  {userRole === 'Admin' && <li><Link to='/Concessions'>Concessions</Link></li>}
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="navbar-center logo-container">
          <button><Link to='/'><img
            alt="logo"
            src={process.env.PUBLIC_URL + '9logo.jpg'}
            className="responsive-logo"
          /></Link></button>
        </div>
        <div className="navbar-end">
          {userRole && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className={`avatar group placeholder ${isProfileDropdownOpen ? 'group-hover:ring-primary' : ''}`}
                onClick={toggleProfileDropdown}
              >
                {userRole ? (
                  <div
                    className={`w-10 h-10 rounded-full ring ring-offset-base-100 ring-offset-2 flex items-center justify-center text-white`}
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    <span className="text-3xl">{userRole.charAt(0)}</span>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="divider custom-divider"></div>
    </>
  );
}

export default Navbar;
