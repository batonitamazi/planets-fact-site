import React from 'react'
import { useNavigate } from 'react-router-dom';
import './drawer.css'

function Drawer({data, open, setOpen}) {
  const navigate = useNavigate()
  return (
    <div className='drawer'>
      {data.map((element, index) => {
        return(<div className='planet--element' key={index}>
          <img src={element.images.planet} className="planet--avatar" alt='mini planet'/>
          <h1 className='element--name'>{element.name}</h1>
          <img src='./assets/icon-chevron.svg' className='arrow-icon' alt='arrow' onClick={() => {setOpen(!open); navigate(`/${element.name}`)}}/>
        </div>)
      })}
    </div>
  )
}

export default Drawer