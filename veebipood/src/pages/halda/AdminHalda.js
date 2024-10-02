import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function AdminHalda() {
  return (
    <div>

        <Button as={Link} to="/halda-esindusi" variant="primary">Halda esindusi</Button>{' '}
        <Button as={Link} to="/halda-hindu" variant="secondary">Halda hindu</Button>{' '}
        <Button as={Link} to="/lisa-toode" variant="success">Lisa uus toode</Button>{' '}
        <Button as={Link} to="/halda-tootajaid" variant="warning">Halda töötajaid</Button>{' '}
        <Button as={Link} to="/halda-tooteid" variant="info">Halda tooteid</Button>{' '}
        <Button as={Link} to="/tarnija" >Tarnija</Button>{' '}
    
    
    {/* <Link to="lisa-toode">
      <button className="nupp">Lisa uus toode</button>
    </Link>

    <Link to="halda-esindusi">
      <button className="nupp">Halda esindusi</button>
    </Link>

    <Link to="halda-hindu">
      <button className="nupp">Halda hindu</button>
    </Link>

    <Link to="halda-tootajaid">
      <button className="nupp">Halda tootajaid</button>
    </Link>

    <Link to="Halda-tooteid">
      <button className="nupp">Halda tooteid</button>
    </Link> */}

    </div>
  )
}

export default AdminHalda