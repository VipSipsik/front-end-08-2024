import React from 'react'

function ContactUs() {
  return (
    <div>
      <section id="team" className="team section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Team</h2>
                <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Eligendi dolorum iste pariatur! In, delectus facere.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src="images/avatar_1.jpg" alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">First Last</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum odio eos temporibus impedit cumque.
                  </p>

                  <p className="socials"></p>
                  <i className='bi bi-twitter text-dark mx-1'></i>
                  <i className='bi bi-facebook text-dark mx-1'></i>
                  <i className='bi bi-linkedin text-dark mx-1'></i>
                  <i className='bi bi-instagram text-dark mx-1'></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src="images/avatar_stock.avif" alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">First Last</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum odio eos temporibus impedit cumque.
                  </p>

                  <p className="socials"></p>
                  <i className='bi bi-twitter text-dark mx-1'></i>
                  <i className='bi bi-facebook text-dark mx-1'></i>
                  <i className='bi bi-linkedin text-dark mx-1'></i>
                  <i className='bi bi-instagram text-dark mx-1'></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src="images/avatar_stock.avif" alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">First Last</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum odio eos temporibus impedit cumque.
                  </p>

                  <p className="socials"></p>
                  <i className='bi bi-twitter text-dark mx-1'></i>
                  <i className='bi bi-facebook text-dark mx-1'></i>
                  <i className='bi bi-linkedin text-dark mx-1'></i>
                  <i className='bi bi-instagram text-dark mx-1'></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src="images/avatar_stock.avif" alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">First Last</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum odio eos temporibus impedit cumque.
                  </p>

                  <p className="socials"></p>
                  <i className='bi bi-twitter text-dark mx-1'></i>
                  <i className='bi bi-facebook text-dark mx-1'></i>
                  <i className='bi bi-linkedin text-dark mx-1'></i>
                  <i className='bi bi-instagram text-dark mx-1'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Contact Us</h2>
                <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Eligendi dolorum iste pariatur! In, delectus facere.</p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" className='bg-light p-4.m-auto'>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input type="text" className="form-control" required placeholder='Your Full name' />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className='mb-3'>
                      <input type="email" className="form-control" required placeholder='Your Email Here' />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className='mb-3'>
                      <textarea rows="3" required className='form-control' placeholder='Your Query Here'></textarea>
                    </div>
                  </div>
                  <button className='btn btn-info btn-lg btn-block mt-3'>Send now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs