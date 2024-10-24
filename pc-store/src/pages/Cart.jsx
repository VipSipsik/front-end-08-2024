import React from 'react'
import { getSelectedCase, getSelectedCooler, getSelectedCpu, getSelectedGpu, getSelectedMotherboard, getSelectedPsu, getSelectedRam, getSelectedSsd } from '../FlowController'


function Cart() {

  const pcCase = getSelectedCase()
  const gpu = getSelectedGpu()
  const psu = getSelectedPsu()
  const cpu = getSelectedCpu()
  const cooler = getSelectedCooler()
  const motherboard = getSelectedMotherboard()
  const ram = getSelectedRam()
  const ssd = getSelectedSsd()

  const pricesTotal = () => {
    const price = Number(pcCase.price)
      + Number(gpu.price)
      + Number(psu.price)
      + Number(cpu.price)
      + Number(cooler.price)
      + Number(motherboard.price)
      + Number(ram.price)
      + Number(ssd.price);
    return price;
  }

  if (pcCase && gpu && psu && cpu && cooler && motherboard && ram && ssd) {
    return (
      <section className="h-100 h-custom" style={{ backgroundColor: "lightblue" }}>
        <div className="container py-5 h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    {/* <h5 className="mb-3"><a href="#!" className="text-body"><i
                      className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5> */}
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h6 className="mb-1">Shopping cart</h6>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className='cart-contents'>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <div>
                                <img src={`/images/${pcCase.image_url}`}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }}>
                                </img>
                              </div>
                              <div className="ms-3"></div>
                              <h6>{pcCase.name}</h6>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "400px", margin: "40px" }}>
                              <h6 className="fw-normal mb-0">Product code: {pcCase.product_code}</h6>
                              <p className="small mb-0">H: {pcCase.height} W: {pcCase.width}</p>
                              <p className="small mb-0"> Color: {pcCase.color}</p>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h6 className="mb-0">{pcCase.price} €</h6>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className='cart-contents'>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <div>
                                <img src={`/images/${gpu.image_url}`}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }}>
                                </img>
                              </div>
                              <div className="ms-3"></div>
                              <h6>{gpu.name}</h6>

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "400px", margin: "40px" }}>
                              <h6 className="fw-normal mb-0">Product code: {gpu.product_code}</h6>
                              <p className="small mb-0">H: {gpu.height} W: {gpu.width}</p>
                              <p className="small mb-0">Color: {gpu.color}</p>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h6 className="mb-0">{gpu.price} €</h6>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className='cart-contents'>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <div>
                                <img src={`/images/${psu.image_url}`}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }}>
                                </img>
                              </div>
                              <div className="ms-3"></div>
                              <h6>{psu.name}</h6>

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "400px", margin: "40px" }}>
                              <h6 className="fw-normal mb-0">Product code: {psu.product_code}</h6>
                              <p className="small mb-0">H: {psu.height} W: {psu.width}</p>
                              <p className="small mb-0">Color: {psu.color}</p>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h6 className="mb-0">{psu.price} €</h6>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className='cart-contents'>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <div>
                                <img src={`/images/${cpu.image_url}`}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }}>
                                </img>
                              </div>
                              <div className="ms-3"></div>
                              <h6>{cpu.name}</h6>

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "400px", margin: "40px" }}>
                              <h6 className="fw-normal mb-0">Product code: {cpu.product_code}</h6>
                              <p className="small mb-0">H: {cpu.height} W: {cpu.weight}</p>
                              <p className="small mb-0">Color: {cpu.color}</p>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h6 className="mb-0">{cpu.price} €</h6>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className='cart-contents'>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <div>
                                <img src={`/images/${cooler.image_url}`}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }}>
                                </img>
                              </div>
                              <div className="ms-3"></div>
                              <h6>{cooler.name}</h6>

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "400px", margin: "40px" }}>
                              <h6 className="fw-normal mb-0">Product code: {cooler.product_code}</h6>
                              <p className="small mb-0">H: {cooler.height} W: {cooler.width}</p>
                              <p className="small mb-0">Color: {cooler.color}</p>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h6 className="mb-0">{cooler.price} €</h6>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className='cart-contents'>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <div>
                                <img src={`/images/${motherboard.image_url}`}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }}>
                                </img>
                              </div>
                              <div className="ms-3"></div>
                              <h6>{motherboard.name}</h6>

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "400px", margin: "40px" }}>
                              <h6 className="fw-normal mb-0">Product code: {motherboard.product_code}</h6>
                              <p className="small mb-0">H: {motherboard.height} W: {motherboard.width}</p>
                              <p className="small mb-0">Color: {motherboard.color}</p>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h6 className="mb-0">{motherboard.price} €</h6>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className='cart-contents'>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <div>
                                <img src={`/images/${ram.image_url}`}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }}>
                                </img>
                              </div>
                              <div className="ms-3"></div>
                              <h6>{ram.name}</h6>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "400px", margin: "40px" }}>
                              <h6 className="fw-normal mb-0">Product code: {ram.product_code}</h6>
                              <p className="small mb-0">H: {ram.height} W: {ram.width}</p>
                              <p className="small mb-0">Color: {ram.color}</p>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h6 className="mb-0">{ram.price} €</h6>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className='cart-contents'>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <div>
                                <img src={`/images/${ssd.image_url}`}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }}>
                                </img>
                              </div>
                              <div className="ms-3"></div>
                              <h6>{ssd.name}</h6>

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "400px", margin: "40px" }}>
                              <h6 className="fw-normal mb-0">Product code: {ssd.product_code}</h6>
                              <p className="small mb-0">H: {ssd.height}, W: {ssd.width}</p>
                              <p className="small mb-0">Color: {ssd.color}</p>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h6 className="mb-0">{ssd.price} €</h6>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="col-lg-5">

                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3" style={{ width: "45px" }} alt="Avatar">
                          </img>
                        </div>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-visa fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-amex fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input type="text" id="card_name" className="form-control form-control-lg" size="17"
                              placeholder="Cardholder's Name" />
                            <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <input type="text" id="card_number" className="form-control form-control-lg" size="17"
                              placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                            <label className="form-label" htmlFor="typeText">Card Number</label>
                          </div>

                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input type="text" id="typeExp" className="form-control form-control-lg"
                                  placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                <label className="form-label" htmlFor="typeExp">Expiration</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input type="password" id="typeText" className="form-control form-control-lg"
                                  placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" autoComplete="cvc" />
                                <label className="form-label" htmlFor="typeText">cvc</label>
                              </div>
                            </div>
                          </div>

                        </form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">€</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">10 €</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2"> €</p>
                        </div>

                        <div className="cart-footer cart-header">
                          <h4>Total</h4>
                          <p className="total">{pricesTotal()} €</p>
                        </div>
                        <button type="button" className="btn btn-info btn-block btn-lg">PROCEED TO BUY</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    )
  } else {
    return (
      <div>no cart</div>
    )
  }
}

export default Cart