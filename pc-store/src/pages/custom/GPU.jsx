import React from 'react'
import FlowBar from '../../components/FlowBar'
import gpus from '../../data/gpus.json'
import { useNavigate } from 'react-router-dom';

function GPU() {
  let navigate = useNavigate();

  const getGpus = () => {
    return gpus;
  }

  const selectGpu = (id) => {
    localStorage.setItem("gpu-id", id);
    navigate('/psu', { replace: true });
  }


  return (
    <div>
      GPU
      <FlowBar/>

      <div className='gpus-container row'>
        {getGpus().map((gpu, index) =>
          <div className="col-4" key={index} onClick={() => selectGpu(gpu.id)}>
            <div className="card h-100 align-items-center">
              <img className='gpu-img card-img-top' src={`/images/${gpu.image_url}`} alt="" />

              <div className="card-body">
                <h5 className="card-title">{gpu.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GPU