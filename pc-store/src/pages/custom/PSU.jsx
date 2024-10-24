import React from 'react'
import FlowBar from '../../components/FlowBar'
import {getPsus, setSelectedPsuId} from '../../FlowController'
import { useNavigate } from 'react-router-dom';

function PSU() {
  let navigate = useNavigate();


  const selectPsu = (psu) => {
    setSelectedPsuId(psu.id);
    navigate('/cpu', { replace: true });
  }

  return (
    
    <div>
      <FlowBar/>

      <div className='psus-container row'>
        {getPsus().map((psu, index) =>

          <div className="col-4" key={index} onClick={() => selectPsu(psu)} >
            <div className="card h-100 align-items-center">
              <img className='psu-img card-img-top h-50 w-50' src={`/images/${psu.image_url}`} alt="" />
              <div className="card-body">
                <h5 className="card-title">{psu.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PSU