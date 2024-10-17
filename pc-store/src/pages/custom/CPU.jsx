import React, { useState } from 'react'
import FlowBar from '../../components/FlowBar'
import cpus from '../../data/cpus.json'
import { useNavigate } from 'react-router-dom';

function CPU() {
  const [cpuClass, setCpuClass] = useState("");
  let navigate = useNavigate();

  const getCpus = () => {
    return cpus;
  }

  const selectCpu = (id) => {
    localStorage.setItem("cpu-id", id);
    setCpuClass('completed-step');
    navigate('/cooler', { replace: true });
  }

  return (
    <div>
      CPU
      <FlowBar
        caseClass='completed-step'
        gpuClass='completed-step'
        psuClass='completed-step'
        cpuClass={cpuClass}
      />
      <div className='psus-container row'>
        {getCpus().map((cpu, index) =>
          <div className="col-4" key={index} onClick={() => selectCpu(cpu.id)} >
            <div className="card h-100 align-items-center">
              <img className='cpu-img card-img-top' src={`/images/${cpu.image_url}`} alt="" />
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