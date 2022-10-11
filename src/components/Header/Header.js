import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
   <nav className="navbar navbar-expand-lg p-4 ">
    <div className="container-fluid">
    <span className="navbar-brand" href="#">QUIZ_SHOW</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
            <Link className='nav-link primary-color' to='/'></Link>
            <Link className='nav-link primary-color' to='/Home'>Home</Link>
            <Link className='nav-link primary-color' to='/topics'>Topics</Link>
            <Link className='nav-link primary-color' to='/chart'>Chart</Link>
            <Link className='nav-link primary-color' to='/blog'>Blog</Link>
      </div>
    </div>
    </div>
   </nav>
        
    );
};

export default Header;