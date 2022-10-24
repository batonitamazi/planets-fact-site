import React from 'react'
import './planetPage.css';

function PlanetPage({ data }) {
  return (
    <div className='info--container'>
      <div className='about--planet-card'>
        <img src={data?.images?.planet} alt={`${data?.name}`} id="planet--picture" className='planet--picture' />
        <div className='info--card'>
          <h1 className='planet--name'>{data?.name}</h1>
          <p className='planet--paragraph'>
            {data?.overview.content}
          </p>
          <a href={`${data?.overview.source}`}>Source: Wikipedia <img src='./assets/icon-source.svg' alt='src ' /></a>
          <div className='plannet--overview--buttons'>
            <button className='button--overview active'>
              <span className='list--number'>01</span> Overview
            </button>
            <button className='button--overview'>
              <span className='list--number'>02</span> Internal structure
            </button>
            <button className='button--overview'>
              <span className='list--number'>03</span> Surface geology
            </button>
          </div>
        </div>

      </div>
      <div className='container--footer'>
        <div className='mini--info--card'>
          
        </div>
      </div>
    </div>
  )
}

export default PlanetPage