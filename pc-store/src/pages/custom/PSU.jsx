import React, { useState } from 'react'
import FlowBar from '../../components/FlowBar'
import psus from '../../data/psus.json'
import { useNavigate } from 'react-router-dom';

function PSU() {
  const [psuClass, setPsuClass] = useState("");
  let navigate = useNavigate();

  const getPsus = () => {
    return psus;
  }

  const selectPsu = (id) => {
    localStorage.setItem("psu-id", id);
    setPsuClass('completed-step');
    navigate('/cpu', { replace: true });
  }

  return (
    <div>
      PSU
      <FlowBar
        caseClass='completed-step'
        gpuClass='completed-step'
        psuClass={psuClass}
      />

      <div className='psus-container row'>
        {getPsus().map((psu, index) =>

          <div className="col-4" key={index} onClick={() => selectPsu(psu.id)} >
            <div className="card h-100 align-items-center">
              <img className='psu-img card-img-top' src={`/images/${psu.image_url}`} alt="" />
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