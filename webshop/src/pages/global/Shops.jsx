import React, { useState, useRef } from 'react';
import ShopsFromFile from '../../data/shops.json';
import { useTranslation } from 'react-i18next';

import Map from '../../components/Map';



function Shops() {
  const { t } = useTranslation();
  const [coordinaates, setCoordinates] = useState({ lngLat: [59.4378, 24.7574], zoom: 11 });

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
      <button onClick={() => setCoordinates({ lngLat: [58.8689, 25.8937], zoom: 7 })}>All shops</button>
      <button className={city === "Tallinn" ? "city-active" : "city"} onClick={() => setCity("Tallinn") & setCoordinates ({ lngLat: [59.4378, 24.7574], zoom: 11 })}>All shops in Tallinn</button>
      <button onClick={() => setCoordinates({ lngLat: [59.4231, 24.7991], zoom: 13 })}>Ülemiste</button>
      <button onClick={() => setCoordinates({ lngLat: [59.4277, 24.7193], zoom: 13 })}>Kristiine</button>
      <button className={city === "Tartu" ? "city-active" : "city"} onClick={() => setCity("Tartu") & setCoordinates ({ lngLat: [58.3781, 26.7317], zoom: 13 })}>Tartu</button>
      <button className={city === "Narva" ? "city-active" : "city"} onClick={() => setCity("Narva") & setCoordinates ({ lngLat: [59.3798, 28.1873], zoom: 13 })}>Narva</button>
      <button className={city === "Pärnu" ? "city-active" : "city"} onClick={() => setCity("Pärnu") & setCoordinates({ lngLat: [58.3875, 24.5046], zoom: 13 })}>Pärnu</button>
      
      
      <Map mapCoordinaates={coordinaates} />

     {city === "Tallinn" &&
        <div>
          {shops.map((shop) =>
            <div key={shop.name}>
              {shop.name} - {shop.tel} - {shop.address}
            </div>)}
        </div>}

      {city === "Tartu" &&
        <div>
          <div>Tasku Centre</div>
          <div>Raatuse</div>
          <div>Lõunakeskus Shopping Centre</div>
        </div>}

      {city === "Narva" && <div>Fama</div>}

      {city === "Pärnu" && <div>Port Artur 2</div> } <br />

      
      



    </div>
  )
}

export default Shops