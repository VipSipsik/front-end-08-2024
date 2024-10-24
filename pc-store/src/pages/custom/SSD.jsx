import React from 'react'
import FlowBar from '../../components/FlowBar'
import {getSsds, setSelectedSsdId} from '../../FlowController'
import { useNavigate } from 'react-router-dom';

function SSD() {

  let navigate = useNavigate();
  


  const selectSsd = (ssd) => {
    setSelectedSsdId(ssd.id);
    navigate('/cart', { replace: true });
  }

  return (
    <div>
      <FlowBar />
      <div className='ssds-container row'>
        {getSsds().map((ssd, index) =>
          <div className="col-4" key={index} onClick={() => selectSsd(ssd)} >
            <div className="card h-100 align-items-center">
              <img className='ssd-img card-img-top h-40 w-50' src={`/images/${ssd.image_url}`} alt="" />
              <div className="card-body">
                <h5 className="card-title">{ssd.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SSD