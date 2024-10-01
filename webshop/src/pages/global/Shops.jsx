import React, { useState, useRef } from 'react';
import ShopsFromFile from '../../data/shops.json';
import { useTranslation } from 'react-i18next';



function Shops() {
  const { t } = useTranslation();

  const [city, setCity] = useState("Tallinn");
  const [shops, setShops] = useState(ShopsFromFile.slice());
  const searchRef = useRef();

  const searchShops = () => {
    const answer = ShopsFromFile.filter(shop => shop.name.includes(searchRef.current.value));
    setShops(answer);
  }


  return (
    <div>

      <div>{t("Search")}</div>
      <input ref={searchRef} onChange={searchShops} type="text" />

      <div>City selected: {city}</div>
         <button className={city === "Tallinn" ? "city-active" : "city"} onClick={() => setCity("Tallinn")}>Tallinn</button>
         <button className={city === "Tartu" ? "city-active" : "city"} onClick={() => setCity("Tartu")}>Tartu</button>
         <button className={city === "Narva" ? "city-active" : "city"}onClick={() => setCity("Narva")}>Narva</button>
         <button className={city === "Pärnu" ? "city-active" : "city"} onClick={() => setCity("Pärnu")}>Pärnu</button>

        {city === "Tallinn" && 
        <div>
          {shops.map((shop) => 
            <div key={shop.name}>
             {shop.name} - {shop.tel} - {shop.address}
            </div> )}
        </div>}

        {city === "Tartu" &&
        <div>
         <div>Raatuse</div>
         <div>Lõunakesus</div>
        </div>}

        {city === "Narva" && <div>Fama</div>}

        {city === "Pärnu" && <div>Port Artur 2</div>} <br />
        
      

    </div>
  )
}

export default Shops