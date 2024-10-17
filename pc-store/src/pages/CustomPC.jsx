import React from 'react'
import { Link } from 'react-router-dom';

function CustomPC() {

    return (
        <div>
            <div>Custom PC</div>
            <Link to={'/computer-case'}>
                <button>Start configuring</button>
            </Link>
        </div>
    )
}

export default CustomPC