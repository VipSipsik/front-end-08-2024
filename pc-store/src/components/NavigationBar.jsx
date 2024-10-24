import React from 'react'

function NavigationBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-light bg light sticky-top'>
        <div className='container-fluid'>
          <a className='navbar-brand' href="/"> <span className="text-info">Sys</span>Shop
            <img className="navbar-logo" src="/images/homepage_logo.jpg" alt="" />
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls='navbarSupportedContent' aria-expanded="false"
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id="navbarSupportedContent">
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item active' >
                <a className='nav-link' href="/">Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="/custom-pc">Custom PC</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="/pre-configured-pc">Preconfigured PC</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="/cart">Cart</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="/contact-us">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  )
}

export default NavigationBar