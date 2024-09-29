import React from 'react'
import { Link } from 'react-router-dom';
import websiteLogo from '../images/webshop.png';
import { useTranslation } from 'react-i18next';

// Edit navigation barist maha 
function NavigationBar() {
  const { t, i18n } = useTranslation();

  return (
    <div className='navbar'>
      <img className='website-logo' src={websiteLogo} alt="Logo" /><br />

      <button onClick={() => i18n.changeLanguage("et")}>EST</button>
      <button onClick={() => i18n.changeLanguage("en")}>ENG</button>
      
      <div className='navbar-buttons'>
        <Link to=" ">
          <button className="btn">{t("Homepage")}</button>
        </Link>

        <Link to="cart">
          <button className="btn"> {t("Cart")} </button>
        </Link>

        <Link to="contact-us" >
          <button className="btn">{t("Contact")}</button>
        </Link>

        {/* <Link to="not-found" >
        <button className="btn">Not found</button>
      </Link> */}

        <Link to="shops" >
          <button className="btn">{t("Shops")}</button>
        </Link>

        {/* <Link to="single-product" >
        <button className="btn">Single product</button>
      </Link> */}


        <Link to="login" >
          <button className="btn">{t("Login")}</button>
        </Link>
        <Link to="signup" >
          <button className="btn">{t("Signup")}</button>
        </Link>

        {/* <Link to="admin/add-product" >
        <button className="btn">Add product</button>
      </Link> */}
        <Link to="admin/admin-home" >
          <button className="btn">Admin home</button>
        </Link>
        {/* <Link to="admin/edit-product" >
        <button className="btn">Edit product</button>
      </Link> */}
        <Link to="admin/maintain-categories" >
          <button className="btn">Maintain categories </button>
        </Link>
        <Link to="admin/maintain-products" >
          <button className="btn">Maintain products</button>
        </Link>
        <Link to="admin/maintain-shops" >
          <button className="btn">Maintain Shops</button>
        </Link>

      </div>
    </div>
  )
}

export default NavigationBar