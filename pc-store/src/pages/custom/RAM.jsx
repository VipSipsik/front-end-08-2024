import React from 'react'
import FlowBar from '../../components/FlowBar'
import rams from '../../data/rams.json'
import { useNavigate } from 'react-router-dom';

function RAM() {
  let navigate = useNavigate();

  const getRams = () => {
    return rams;
  }

  const selectRam = (id) => {
    localStorage.setItem("ram-id", id);
    navigate('/ssd', { replace: true });
  }
  return (
    <div>
      RAM
      <FlowBar />

      <div className='rams-container row'>
        {getRams().map((ram, index) =>
          <div className="col-4" key={index} onClick={() => selectRam(ram.id)} >
            <div className="card h-100 align-items-center">
            <img className='ram-img card-img-top' src={`/images/${ram.image_url}`} alt="" />
            <div className="card-body">
              <h5 className="card-title">{ram.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>             
            </div>
          </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default RAM