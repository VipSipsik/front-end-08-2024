import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import shopsFromFile from '../../data/shops.json';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function MaintainShops() {
  const { t } = useTranslation();

  const [shop, setShops] = useState(shopsFromFile.slice());
  const shopRef = useRef();
  const telRef = useRef();
  const addressRef = useRef();
  const searchRef = useRef();

  const del = (index) => {
    //  keskused.splice(index,1); muudab ainult selle lehe HTMLis
    shopsFromFile.splice(index, 1); // muudab .json failis
    setShops(shopsFromFile.slice());
    toast.success("Shop deleted!");

    const addShop = () => {
      shopsFromFile.push(
        {
          "name": shopRef.current.value,
          "tel": telRef.current.value,
          "address": addressRef.current.value
        }
      );
      setShops(shopsFromFile.slice());
    }

    const searchShops = () => {
      const found = shopsFromFile.filter(shop => shop.name.includes(searchRef.current.value));
      setShops(found);
    }

  }
  return (
    <div>
      <div>{t("Search")}</div>
        {/* <input ref={searchRef} onChange={searchShops} type= "text" />
        <br /><br /> */}
        
        <label>Keskuse nimi</label> <br />
        <input ref={shopRef}  type="text" /> <br />
        
        <label>Keskuse telefon</label> <br />
        <input ref={telRef}  type="text" /> <br />
       
        <label>Keskuse aadress</label> <br />
        <input ref={addressRef}  type="text" /> <br />
        {/* <button onClick={addShop}>Lisa</button> <br /> */}

        <table className="maintain">
          <thead>
            <tr>
              <th>ID</th>
              <th>{t("Name")}</th>
              <th>Phone</th>
              <th>Address</th>
              <th>{t("")}</th>
            </tr>
          </thead>
          <tbody>
           {/* <tfoot></tfoot> */}
           {shop.map((shop, index) => 
           <tr key={index}>
            <td>{index}.</td>
            <td>{shop.name}</td>
            <td>{shop.tel}</td>
            <td>{shop.address}</td>
            <td>
             <button onClick={() => del(index)}>x</button> 
             {/* App.js:muuda-esindus/:jrknr */}
             <Link to={"/muuda-esindus/" + index} >
             <button className='edit-button'>{t("Edit")}</button>
             <button className='delete-button' onClick={() => del(index)}>x</button>
             </Link>
             </td>
           </tr>)}
          </tbody>
        </table>



         <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
        />
      <div>MaintainShops</div>
    </div>
  )
}

export default MaintainShops