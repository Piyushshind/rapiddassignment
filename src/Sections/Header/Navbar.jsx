import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav>
        <div className="icon">
          <i onClick={toggleDropdown}><h3>Options</h3></i>
        </div>
        <div className={`nav-links ${showMenu ? 'show' : ''}`}>
          <a href='/'>Ipsum</a>
          <a href='/about'>Ipsum</a>
          <a href='/event'>Ipsum</a>
          <a href='/contactus'>Ipsum</a>
        </div>
        <div className="hamburger" onClick={handleMenuToggle}>
          <div className={`line ${showMenu ? 'line-1' : ''}`}></div>
          <div className={`line ${showMenu ? 'line-2' : ''}`}></div>
          <div className={`line ${showMenu ? 'line-3' : ''}`}></div>
        </div>
      </nav>
      {dropdownOpen && (
        <div className="options-dropdown">
          <div className="dropdown-division1">
            <b><a href="/">Division 1</a></b>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </div>
          <div className="dropdown-division2">
            <b><a href="/">Division 2</a></b>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </div>
          {showMenu && <div className="desktop">
            <a href='/'>Ipsum</a>
            <a href='/about'>Ipsum</a>
            <a href='/event'>Ipsum</a>
            <a href='/contactus'>Ipsum</a>
          </div>}
        </div>
      )}
      <div>
      </div>
    </>
  )
}

export default Navbar