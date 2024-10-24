import React from 'react'
import { Link } from 'react-router-dom';

function CustomPC() {

    return (
        <div>
             <div className='container p-5 bg-light'>
            <h3>Custom PC</h3>
            <Link to={'/computer-case'}>
            <button className='btn btn-info'>Start configuring</button><br />
                <img src="images/carousel_1.webp " alt="" />
              
            </Link>

            <div className='container p-5 bg-light'>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-playstation"></i>
                  <h3 className='card-title'>How we do what we do</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia optio numquam saepe explicabo laboriosam,
                    ea magnam, velit ratione modi omnis. Quo accusamus a libero.</p>
                  <button className='btn btn-warning text dark'>Read More</button>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default CustomPC