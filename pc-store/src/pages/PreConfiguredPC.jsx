import React from 'react';
import { useState } from 'react'
import preconfiguredPcsDataset from '../data/preconfigured-pcs.json';
import { getById, getCases, getGpus, getPsus, getCpus, getCoolers, getMotherboards, getRams, getSsds,setSelectedCaseId, setSelectedGpuId, setSelectedPsuId, setSelectedCpuId,
setSelectedCoolerId, setSelectedMotherboardId, setSelectedRamId, setSelectedSsdId } from '../FlowController';
import { useNavigate } from 'react-router-dom';

function PreConfiguredPC() {
  let navigate = useNavigate();

  const [preconfiguredPcs, setPreconfiguredPc] = useState(preconfiguredPcsDataset.slice());
  
  const sortByLowestPrice = () => {
    preconfiguredPcs.sort((a, b) => calculatePreconfigPrice(a) - calculatePreconfigPrice(b));
    setPreconfiguredPc(preconfiguredPcs.slice());
  }

  const sortAZ = () => {
    preconfiguredPcs.sort((a, b) => a.name.localeCompare(b.name));
    setPreconfiguredPc(preconfiguredPcs.slice());
  }

  const selectPreconfiguredPC = (preconfiguredPc) => {

    setSelectedCaseId(preconfiguredPc.case_id);
    setSelectedGpuId(preconfiguredPc.gpu_id);
    setSelectedPsuId(preconfiguredPc.psu_id);
    setSelectedCpuId(preconfiguredPc.cpu_id);
    setSelectedCoolerId(preconfiguredPc.cooler_id);
    setSelectedMotherboardId(preconfiguredPc.motherboard_id);
    setSelectedRamId(preconfiguredPc.ram_id);
    setSelectedSsdId(preconfiguredPc.ssd_id);
    navigate('/cart', { replace: true });
    // ToDo: Save case_id in localStorage  
  }

  const calculatePreconfigPrice = (preconfiguredPc) => {
    const pcCase = getById(preconfiguredPc.case_id, getCases());
    const gpu = getById(preconfiguredPc.gpu_id, getGpus());
    const psu = getById(preconfiguredPc.gpu_id, getPsus());
    const cpu = getById(preconfiguredPc.gpu_id, getCpus());
    const cooler = getById(preconfiguredPc.gpu_id, getCoolers());
    const motherboard = getById(preconfiguredPc.gpu_id, getMotherboards());
    const ram = getById(preconfiguredPc.gpu_id, getRams());
    const ssd = getById(preconfiguredPc.gpu_id, getSsds());

    let price = Number(pcCase.price)
      + Number(gpu.price)
      + Number(psu.price)
      + Number(cpu.price)
      + Number(cooler.price)
      + Number(motherboard.price)
      + Number(ram.price)
      + Number(ssd.price)
    return price;
  }

  return (

    <div>
      <button type="button" className="btn btn-info btn-block btn-md" onClick={sortByLowestPrice}>Low to high</button>
      <button type="button" className="btn btn-info btn-block btn-md" onClick={sortAZ}>A-Z</button>
      
      <h3 className='preconfig-title'>Preconfigured PCs</h3>
      <div className='preconfigured-card row'>
        {preconfiguredPcs.map((preconfiguredPc, index) =>
          <div className='col-4' key={index} >
            <div className="card h-100 align-items-center shadow">
              <img className='pre-case-image card-img-top h-40 w-50'
                src={`/images/${getById(preconfiguredPc.case_id, getCases()).image_url}`} alt="" />
              <div className='card-body'>
                <h5 className='card-title fw-bold'> {preconfiguredPc.name} </h5>
                <div className="details h-100">
                  <h6 className='title fw-bold'>CASE</h6>
                  <span className='card-text case-height'>{getById(preconfiguredPc.case_id, getCases()).height} x</span>
                  <span className='case-name'> {getById(preconfiguredPc.case_id, getCases()).width} x</span>
                  <span className='case-name'> {getById(preconfiguredPc.case_id, getCases()).depth} </span>
                  <p className='card-text case-name text-start'>{getById(preconfiguredPc.case_id, getCases()).name} </p>
                  <p className='card-text case-code text-start'> Product code: {getById(preconfiguredPc.case_id, getCases()).product_code} </p>

                  <h6 className='title fw-bold'>GPU</h6>
                  <p className='card-text text-start'>{getById(preconfiguredPc.gpu_id, getGpus()).name}</p>
                  <h6 className='title fw-bold'>PSU</h6>
                  <p className='card-text text-start'> {getById(preconfiguredPc.psu_id, getPsus()).name}</p>
                  <h6 className='title fw-bold'>CPU</h6>
                  <p className='card-text text-start'>{getById(preconfiguredPc.cpu_id, getCpus()).name}</p>
                  <h6 className='title fw-bold'>Cooler</h6>
                  <p className='card-text text-start'>{getById(preconfiguredPc.cooler_id, getCoolers()).name}</p>
                  <h6 className='title fw-bold'>Motherboard</h6>
                  <p className='card-text text-start'>{getById(preconfiguredPc.motherboard_id, getMotherboards()).name}</p>
                  <h6 className='title fw-bold'>RAM</h6>
                  <p className='card-text text-start'>{getById(preconfiguredPc.ram_id, getRams()).name}</p>
                  <h6 className='title fw-bold'>SSD</h6>
                  <p className='card-text text-start'>{getById(preconfiguredPc.ssd_id, getSsds()).name}</p>


                  <p className="total text-danger fw-bold">Total PC price: {calculatePreconfigPrice(preconfiguredPc)} €</p>
                </div>
                <button type="button" className="btn btn-info btn-block btn-md select-button" onClick={() => selectPreconfiguredPC(preconfiguredPc)}>PROCEED TO CART</button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default PreConfiguredPC