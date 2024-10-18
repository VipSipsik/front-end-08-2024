import React from 'react'
import { Link } from 'react-router-dom';


function Homepage() {
  return (

    <div>
      <div>Homepage</div><br />
      
      <br />
      <Link to={'/custom-pc'}>
        <button>custom your pc</button>
        <img style={{ width: "auto", height: "200px", padding:"10px"}} src="/images/pc_pic_1.webp" alt="" />
      </Link> <br />

      <Link to={'/pre-configured-pc'}>
        <button>preconfig pcs</button>
        <img style={{ width: "auto", height: "200px", padding:"10px" }} src="/images/pc_pic_1.webp" alt="" />
      </Link> <br />

    </div>
  )
}

export default Homepage