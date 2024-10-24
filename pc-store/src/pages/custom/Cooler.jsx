import React from 'react'
import FlowBar from '../../components/FlowBar'
import {getCoolers,setSelectedCoolerId} from '../../FlowController'
import { useNavigate } from 'react-router-dom';

function Cooler() {
  let navigate = useNavigate();

  const selectCooler = (cooler) => {
    setSelectedCoolerId(cooler.id);
    navigate('/motherboard', { replace: true });
  }

  return (
    
    <div>
      <FlowBar/>
      <div className='coolers-container row'>
        {getCoolers().map((cooler, index) =>
          <div className="col-4" key={index} onClick={() => selectCooler(cooler)}>
            <div className="card h-100 align-items-center">
              <img className='cooler-img card-img-top h-50 w-50' src={`/images/${cooler.image_url}`} alt="" />
              <div className="card-body">
                <h5 className="card-title">{cooler.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Cooler