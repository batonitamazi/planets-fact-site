import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div className='nav'>
      <h1 className='nav--heading'>The Plannets</h1>
      <ul className='nav--list'>
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
        <li>Neptune</li>
      </ul>
    </div>
  )
}

export default Navbar