import React, { useEffect, useState } from 'react'
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

  if (pcCase && gpu && psu && cpu && cooler && motherboard && ram && ssd) {
    return (
      <div>Cart
        <div className='cart-contents'>
          <div className='case'>
            <img className='cart-item-img' src={`/images/${pcCase.image_url}`} alt="" />
            <span className='cart-item-name'>{pcCase.name}</span>
            <span className='cart-item-price'> {pcCase.price} €</span>
          </div>
          <div className='gpu'>
            <img className='cart-item-img' src={`/images/${gpu.image_url}`} alt="" />
            <span className='cart-item-name'>{gpu.name}</span>
            <span className='cart-item-price'> {gpu.price} €</span>
          </div>
          <div className='psu'>
            <img className='cart-item-img' src={`/images/${psu.image_url}`} alt="" />
            <span className='cart-item-name'>{psu.name}</span>
            <span className='cart-item-price'> {psu.price} €</span>
          </div>
          <div className='cpu'>
            <img className='cart-item-img' src={`/images/${cpu.image_url}`} alt="" />
            <span className='cart-item-name'>{cpu.name}</span>
            <span className='cart-item-price'> {cpu.price} €</span>
          </div>
          <div className='cooler'>
            <img className='cart-item-img' src={`/images/${cooler.image_url}`} alt="" />
            <span className='cart-item-name'>{cooler.name}</span>
            <span className='cart-item-price'> {cooler.price} €</span>
          </div>
          <div className='motherboard'>
            <img className='cart-item-img' src={`/images/${motherboard.image_url}`} alt="" />
            <span className='cart-item-name'>{motherboard.name}</span>
            <span className='cart-item-price'> {motherboard.price} €</span>
          </div>
          <div className='ram'>
            <img className='cart-item-img' src={`/images/${ram.image_url}`} alt="" />
            <span className='cart-item-name'>{ram.name}</span>
            <span className='cart-item-price'> {ram.price} €</span>
          </div>
          <div className='ssd'>
            <img className='cart-item-img' src={`/images/${ssd.image_url}`} alt="" />
            <span className='cart-item-name'>{ssd.name}</span>
            <span className='cart-item-price'> {ssd.price} €</span>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>no cart</div>
    )
  }
}

export default Cart