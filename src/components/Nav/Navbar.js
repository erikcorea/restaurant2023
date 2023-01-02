import React from 'react'

function Navbar() {
  return (
    <header className='header-container'>
        <div className='header-inner'>
            <div className='header-right'>
                <nav className='header-nav'>
                    <div className='header-nav-inner'>
                        <a>Home</a>
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
                        <a className='word-one'>Contact</a>
                        <a className='word-two'>About</a>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar