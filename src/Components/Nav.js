import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css'

export default function Nav (props) {
    return (
        <div className='nav'>
            <img src='pics/lotus 1.png' />
            <Link className='link' to='/'>LOTU SOLUTIONS</Link>
        </div>
    )
}
