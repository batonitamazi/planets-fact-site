import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar({data, handleDrawer}) {
  const navigate = useNavigate();
  return (
    <div className='nav'>
      <h1 className='nav--heading' onClick={() => navigate('/')}>The Plannets</h1>
      <img src='./assets/icon-hamburger.svg' alt='hamburger' className='hamburger--icon' onClick={handleDrawer}/>
      <ul className='nav--list'>
        {data?.map((element, index) => {
          return(<li key={index} onClick={() =>  navigate(`/${element.name}`)}>
            {element.name}
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Navbar