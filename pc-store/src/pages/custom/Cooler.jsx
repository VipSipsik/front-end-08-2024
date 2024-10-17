import React, { useState } from 'react'
import FlowBar from '../../components/FlowBar'
import coolers from '../../data/coolers.json'
import { useNavigate } from 'react-router-dom';

function Cooler() {
  const [coolerClass, setCoolerClass] = useState("");
  let navigate = useNavigate();

  const getCoolers = () => {
    return coolers;
  }

  const selectCooler = (id) => {
    localStorage.setItem("cooler-id", id);
    setCoolerClass('completed-step');
    navigate('/motherboard', { replace: true });
  }

  return (
    <div>
      Cooler
      <FlowBar
        caseClass='completed-step'
        gpuClass='completed-step'
        psuClass='completed-step'
        cpuClass='completed-step'
        coolerClass={coolerClass}
      />
      <div className='coolers-container row'>
        {getCoolers().map((cooler, index) =>
          <div className="col-4" key={index} onClick={() => selectCooler(cooler.id)}>
            <div className="card h-100 align-items-center">
              <img className='cooler-img card-img-top' src={`/images/${cooler.image_url}`} alt="" />
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