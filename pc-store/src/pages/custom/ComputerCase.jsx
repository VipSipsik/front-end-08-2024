import React, { useState } from 'react'
import FlowBar from '../../components/FlowBar'
import cases from "../../data/cases.json"
import { useNavigate } from 'react-router-dom';

function ComputerCase() {
  const [caseClass, setCaseClass] = useState("");
  let navigate = useNavigate();

  const getCases = () => {
    return cases;
  }

  const selectCase = (id) => {
    localStorage.setItem("case-id", id);
    setCaseClass('completed-step');
    navigate('/gpu', { replace: true });
    // ToDo: Save case_id in localStorage  
  }
  console.log(caseClass)
  return (
    <div className=''>
      ComputerCase
      <FlowBar
        caseClass={caseClass}
      />

      <div className='cases-container row'>
        {getCases().map((computerCase, index) =>
          <div className="col-4" key={index} onClick={() => selectCase(computerCase.id)}>
            <div className="card h-100 align-items-center">
              <img className='case-img card-img-top ' src={`/images/${computerCase.image_url}`} alt="" />
              <div className="card-body">
                <h5 className="card-title">{computerCase.name}</h5>
                <h6>Product code: {computerCase.product_code}</h6>
                <p className="card-text">
                 Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ComputerCase