import React, { useState } from 'react'
import FlowBar from '../../components/FlowBar'
import motherboards from '../../data/motherboards.json'
import { useNavigate } from 'react-router-dom';

function Motherboard() {
  const [motherboardClass, setMotherboardClass] = useState("");
  let navigate = useNavigate();

  const getMotherboards = () => {
    return motherboards;
  }

  const selectMotherboard = (id) => {
    localStorage.setItem("motherboard-id", id);
    setMotherboardClass('completed-step');
    navigate('/ram', { replace: true });
  }

  return (
    <div>
      Motherboard
      <FlowBar
        caseClass='completed-step'
        gpuClass='completed-step'
        psuClass='completed-step'
        cpuClass='completed-step'
        coolerClass='completed-step'
        mbClass={motherboardClass}
      />
      <div className='motherboards-container row'>
        {getMotherboards().map((motherboard, index) =>
          <div className="col-4" key={index} onClick={() => selectMotherboard(motherboard.id)} >
            <div className="card h-100 align-items-center">
              <img className='motherboard-img card-img-top' src={`/images/${motherboard.image_url}`} alt="" />
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