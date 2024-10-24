import React from 'react';
import FlowBar from '../../components/FlowBar';
import {getMotherboards, setSelectedMotherboardId} from '../../FlowController';
import { useNavigate } from 'react-router-dom';

function Motherboard() {
  let navigate = useNavigate();

  const selectMotherboard = (motherboard) => {
    setSelectedMotherboardId(motherboard.id);
    navigate('/ram', { replace: true });
  }

  return (
    <div>
      <FlowBar />
      <div className='motherboards-container row'>
        {getMotherboards().map((motherboard, index) =>
          <div className="col-4" key={index} onClick={() => selectMotherboard(motherboard)} >
            <div className="card h-100 align-items-center">
              <img className='motherboard-img card-img-top h-50 w-50' src={`/images/${motherboard.image_url}`} alt="" />
              <div className="card-body">
                <h5 className="card-title">{motherboard.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Motherboard