import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.4231, 24.7991]}>
        <Popup>
        Ülemiste Centre. <br /> Open 9-20
        </Popup>
      </Marker>
      <Marker position={[59.4277, 24.7193]}>
        <Popup>
        Kristiine Shopping Centre. <br /> Open 10-21
        </Popup>
      </Marker>
      <Marker position={[58.3781, 26.7317]}>
        <Popup>
          Tasku Centre. <br /> Open 10-21
        </Popup>
      </Marker>
      
      <Marker position={[58.3875, 24.5046]}>
        <Popup>
          Port Artur Centre. <br /> Open 10-21 <br />          <a
          target='_blank'
          rel="noreferrer"
          href="https://www.google.com/maps/place/Port+Artur+2/@58.38744,24.504005,17z/data=!3m1!4b1!4m6!3m5!1s0x46ecfd23c5a5f967:0x4ddf3f80f0c6e99c!8m2!3d58.38744!4d24.504005!16s%2Fg%2F119w8msqc?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
         >
            Lai 11, Pärnu
          </a>
        </Popup>
      </Marker>

      <Marker position={[59.3798, 28.1873]}>
        <Popup>
          Fama Shoppig Centre. <br /> Open 10-23 <br />          <a
          target='_blank'
          rel="noreferrer"
          href="https://www.google.com/maps/place/Fama/@59.3799585,28.1828366,17z/data=!4m10!1m2!2m1!1sfama!3m6!1s0x469448206e73cfa7:0xc3e9a8438eb248eb!8m2!3d59.3797404!4d28.1873023!15sCgRmYW1hIgOIAQFaBiIEZmFtYZIBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F11csb21kjy?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
         >
            Fama põik 10, Narva
          </a>
        </Popup>
      </Marker>
      
      
    </MapContainer>
  </div>)
}

export default Map; 