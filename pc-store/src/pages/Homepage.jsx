import React from 'react'
import ContactUs from './ContactUs'


function Homepage() {


  return (

    <div className="row">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/carousel_1.webp" className="d-block w-100" alt="..." />
            <div className='carousel-caption'>
              <h5>Customize your own computer</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, officia velit distinctio totam exercitationem nulla.</p>
              <p><a href="./custom-pc" className='btn btn-warning mt3'>Go to customization</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/preconfig_homepage_carousel.avif" className="d-block w-100" alt="..." />
            <div className='carousel-caption'>
              <h5>Preconfigured PCs</h5>
              <p>Some representative placeholder content fore the second slide</p>
              <p><a href="./pre-configured-pc" className='btn btn-warning mt3'>Get your preconfigured pc</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="" className="d-block w-100" alt="..." />
            <div className='carousel-caption'>
              <h5>Our projects</h5>
              <p>Some representative placeholder content fore the third slide</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section id="about" className='about section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-12'>
              <div className='about-img'>
                <img src="/images/carousel_1.jpg" alt="" className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-8 col-md-12 col-12 ps-lg-5 my-md-5'>
              <div className='about-text'>
                <h2>We Provide Best Quality <br /> Services Ever </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi consequatur,
                  distinctio blanditiis aspernatur ipsam tempora reiciendis. Illo adipisci quis quibusdam aspernatur laudantium ex vero blanditiis,
                  quisquam necessitatibus fuga accusamus veniam eius quod pariatur exercitationem impedit! Officia quam eligendi eveniet?
                </p>
                <a href="" className='btn btn-info'> Learn More </a>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="services" className="services section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Eligendi dolorum iste pariatur! In, delectus facere.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-slack" alt=""></i>
                  <h3 className='card-title'>Best Quality</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia optio numquam saepe explicabo laboriosam,
                    ea magnam, velit ratione modi omnis. Quo accusamus a libero.</p>
                  <button className='btn btn-warning  text dark'>Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-subtract" alt=""></i>
                  <h3 className='card-title'>Sustainability</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia optio numquam saepe explicabo laboriosam,
                    ea magnam, velit ratione modi omnis. Quo accusamus a libero.</p>
                  <button className='btn btn-warning  text dark'>Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-playstation"></i>
                  <h3 className='card-title'>Integrity</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia optio numquam saepe explicabo laboriosam,
                    ea magnam, velit ratione modi omnis. Quo accusamus a libero.</p>
                  <button className='btn btn-warning  text dark'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className='portfolio section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Projects</h2>
                <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Eligendi dolorum iste pariatur! In, delectus facere.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src="" alt="" className="img-fluid" />
                  </div>
                  <h3 className='card-title'>Computer Configuring</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos, quisquam assumenda ex quasi ullam tenetur voluptatibus.
                    Minima voluptates dolorum eligendi laboriosam labore nulla obcaecati!
                  </p>
                  <button className='btn bg-warning text-dark'>Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src="" alt="" className="img-fluid" />
                  </div>
                  <h3 className='card-title'>Project1</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos, quisquam assumenda ex quasi ullam tenetur voluptatibus.
                    Minima voluptates dolorum eligendi laboriosam labore nulla obcaecati!
                  </p>
                  <button className='btn bg-warning text-dark'>Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src="" alt="" className="img-fluid" />
                  </div>
                  <h3 className='card-title'>Project2</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos, quisquam assumenda ex quasi ullam tenetur voluptatibus.
                    Minima voluptates dolorum eligendi laboriosam labore nulla obcaecati!
                  </p>
                  <button className='btn bg-warning text-dark'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />

      {/* FOOTER */}
      <footer className="bg-dark p-2 text-center">
        <div className="container">
          <p className="text-white">All Rights Reserved @Website Name</p>
        </div>
      </footer>


    </div>
  )
}

export default Homepage