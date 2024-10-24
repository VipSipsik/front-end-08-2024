import React from 'react'
import FlowBar from '../../components/FlowBar'
import {getCpus, setSelectedCpuId} from '../../FlowController'
import { useNavigate } from 'react-router-dom';

function CPU() {
  let navigate = useNavigate();

  const selectCpu = (cpu) => {
    setSelectedCpuId(cpu.id);
    navigate('/cooler', { replace: true });
  }

  return (
    
    <div>
      <FlowBar/>
      <div className='psus-container row'>
        {getCpus().map((cpu, index) =>
          <div className="col-4" key={index} onClick={() => selectCpu(cpu)} >
            <div className="card h-100 align-items-center">
              <img className='cpu-img card-img-top h-40 w-50' src={`/images/${cpu.image_url}`} alt="" />
              <div className="card-body">
                <h5 className="card-title">{cpu.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default CPU