import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/global/HomePage';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';

import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';

import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './pages/global/NotFound';

import React, { useState } from 'react'
import Supplier from './pages/api/Supplier';

function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark-page"));
  
  const changeToDarkMode = () => {
    setDark("true");
    localStorage.setItem("dark-page", "true");
  }

  const changeToLightMode = () => {
    setDark("false");
    localStorage.setItem("dark-page", "false");
  }

  return (
    <div className={dark === "true" ? "App-dark" : "App"}>
      <button onClick={changeToLightMode}>Light mode</button>
      <button onClick={changeToDarkMode}>Dark mode</button>

      <NavigationBar />
      
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/shops' element={<Shops />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:index' element={<SingleProduct />} />

        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/add-product' element={<AddProduct />} />
        <Route path='/admin/edit-product/:index' element={<EditProduct />} />
        <Route path='/admin/maintain-products' element={<MaintainProducts />} />
        <Route path='/admin/maintain-categories' element={<MaintainCategories />} />
        <Route path='/admin/maintain-shops' element={<MaintainShops />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='*' element={<NotFound />} />
        <Route path='/supplier' element={<Supplier/>} />

      </Routes>
      {/* 
      {section &&
        section.length > 0 &&
        section.map(item => {
          return (
            <React.Fragment key={item.title}>
              <SectionItem item={item} />
            </React.Fragment>
          )
        })} */}

        

    </div>
  );
}

export default App;
