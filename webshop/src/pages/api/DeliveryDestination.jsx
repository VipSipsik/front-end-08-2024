import React, { useEffect, useState } from 'react'

function DeliveryDestination() {

  const [deliveryDestination, setDeliveryDestination] = useState([]);
//uef and enter -->
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(res => res.json())
    .then(body => setDeliveryDestination(body)) 
 }, []);

 if (deliveryDestination.length === 0 ) {
     return <div>Loading...</div>
 }

  return (
    <select>
      {deliveryDestination.map(destination => <option>{destination.NAME}</option>)}
      
    </select>
  )
}

export default DeliveryDestination