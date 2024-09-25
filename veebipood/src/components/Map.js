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
          Ülemiste keskus. <br /> Avatud 9-20
        </Popup>
      </Marker>
      <Marker position={[59.4277, 24.7193]}>
        <Popup>
          Kristiine keskus. <br /> Avatud 10-21
        </Popup>
      </Marker>
      <Marker position={[58.3781, 26.7317]}>
        <Popup>
          Tasku keskus. <br /> Avatud 10-21
        </Popup>
      </Marker>
      <Marker position={[58.3875, 24.5046]}>
        <Popup>
          Port Artur keskus. <br /> Avatud 10-21 <br />          <a
          target='_blank'
          rel="noreferrer"
          href="https://www.google.com/maps/place/Port+Artur+2/@58.38744,24.504005,17z/data=!3m1!4b1!4m6!3m5!1s0x46ecfd23c5a5f967:0x4ddf3f80f0c6e99c!8m2!3d58.38744!4d24.504005!16s%2Fg%2F119w8msqc?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
         >
            Lai 11, Pärnu
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  </div>)
}

export default Map; 