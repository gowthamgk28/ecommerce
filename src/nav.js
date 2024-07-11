import React from 'react';
import logo from './images/logo.webp';
import { CiSearch } from "react-icons/ci";
import { MdLocalShipping } from "react-icons/md";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = ({ search, setSearch, searchProduct }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      <div className='header'>
        <div className='top_header'>
          <div className='icon'>
            <MdLocalShipping />
          </div>
          <div className='info'>
            <p>Free shipping when up to shopping $1000</p>
          </div>
        </div>
        <div className='mid_header'>
          <div className='logo'>
            <img src={logo} alt='toplogo' />
          </div>
          <div className='search_box'>
            <input
              type='text'
              value={search}
              placeholder='search'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchProduct}><CiSearch /></button>
          </div>
          {isAuthenticated ? (
            <div className='user'>
              <div className='icon'><FiLogOut /></div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          ) : (
            <div className='user'>
              <div className='icon'><FiLogIn /></div>
              <div className='btn'>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {isAuthenticated ? (
              <>
                <div className='icon'><FaUser /></div>
                <div className='info'>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className='icon'><FaUser /></div>
                <div className='info'><p>Please Login</p></div>
              </>
            )}
          </div>
          <div className='nav'>
            <ul>
              <li><Link to='/' className="link">Home</Link></li> 
              <li><Link to='/shop' className="link">Shop</Link></li>
              <li><Link to='/about' className="link">About</Link></li>
              <li><Link to='/contact' className="link">Contact</Link></li> 
            </ul>
          </div>
          <div className='offer'><p>Flat 10% off on all iPhones</p></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

