import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header-container'>
        <div className='header-inner'>
            <div className='header-right'>
                <nav className='header-nav'>
                    <div className='header-nav-inner'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <a>Menu</a>
                    </div>
                </nav>
            </div>
            <div className='header-mid'>
                <h1>WSFR</h1>
            </div>
            <div className='header-left'>
                <nav className='header-nav'>
                    <div className='header-nav-inner'>
                        <a className='nav-link'>Contact</a>
                        <Link to='/about' className='nav-link'>About</Link>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar