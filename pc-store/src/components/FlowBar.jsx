import React from 'react'
import { Link } from 'react-router-dom';
import {getSelectedCase,getSelectedGpu,getSelectedPsu,getSelectedCpu,getSelectedCooler,getSelectedMotherboard, getSelectedRam,getSelectedSsd} from '../FlowController'

function NavigationBar() {


  const customBuildRoutes = [
    { "route": "/computer-case", "text": "Select computer case", "class": getSelectedCase() ?'completed-step' : '' },
    { "route": "/gpu", "text": "GPU", "class": getSelectedGpu() ? 'completed-step' : ''  },
    { "route": "/psu", "text": "PSU", "class": getSelectedPsu() ? 'completed-step' : '' },
    { "route": "/cpu", "text": "CPU", "class": getSelectedCpu() ? 'completed-step' : '' },
    { "route": "/cooler", "text": "Cooler", "class": getSelectedCooler() ? 'completed-step' : '' },
    { "route": "/motherboard", "text": "Motherboard", "class": getSelectedMotherboard() ? 'completed-step' : '' },
    { "route": "/ram", "text": "RAM", "class": getSelectedRam() ? 'completed-step' : '' },
    { "route": "/ssd", "text": "SSD", "class": getSelectedSsd() ? 'completed-step' : '' },
  ];

  getSelectedCase();
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">


        {customBuildRoutes.map((step, index) =>
          <li className='nav-item' key={index}>
            <Link className='nav-link' to={step.route}>
              {index !== 0 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
                : null
              }
              <button className={step.class}>{step.text}</button>
            </Link>
          </li>
        )}

      </ul>
    </nav>
  )
}

export default NavigationBar