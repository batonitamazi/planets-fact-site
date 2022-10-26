import React, { useState } from 'react'
import './planetPage.css';
import FilterButtons from '../components/filters/FilterButtons'

const buttons = [
  {
    id: '01',
    text: 'Overview',
  },
  {
    id: '02',
    text: 'Internal Structure',
  },
  {
    id: '03',
    text: 'Surface geology',
  },
]
const buttons2 = [
  {
    id: '01',
    text: 'Overview',
  },
  {
    id: '02',
    text: 'Structure',
  },
  {
    id: '03',
    text: 'Surface',
  },
]




function PlanetPage({ data }) {
  const [active, setActive] = useState(0)

  const activeStyle = {
    backgroundColor: '#419EBB',
  }

  const handleClick = (e) => {
    setActive(e.target.value);
  }

  return (
    <div className='info--container'>
      <div className='about--planet-card'>
        <FilterButtons buttons={buttons2} handleClick={handleClick} active={active} data={data}/>
        <img src={Number(active) === 0 ? data?.images?.planet : (Number(active) === 1) ? data?.images?.internal : data?.images?.planet} alt={`${data?.name}`} id="planet--picture" className='planet--picture' />
        {Number(active) === 2 ? (<img src={data?.images?.geology} alt={`${data?.name}`} className="geology--img" />) : null}
        <div className='info--card'>
          <div className='text--container'>
            <h1 className='planet--name'>{data?.name}</h1>
            <p className='planet--paragraph'>
              {data?.overview.content}
            </p>
            <a
              href={`${Number(active) === 0 ? data?.overview.source
                : Number(active) === 1 ? data?.structure.source
                  : Number(active) === 2 ? data?.geology.source : null}`}
            >Source: Wikipedia
              <img src='./assets/icon-source.svg' alt='src ' />
            </a>
          </div>

          <div className='plannet--overview--buttons'>
            {buttons.map((btn, index) => {
              return (
                <button
                  className='button--overview'
                  key={index}
                  onClick={handleClick}
                  style={Number(active) === index ? { backgroundColor: `${data.color}`, border: "none" } : null}
                  value={index}
                >
                  <span className='list--number'>{btn.id}</span>
                  {btn.text}
                </button>
              )
            })}
          </div>
        </div>

      </div>
      <div className='container--footer'>
        <div className='mini--info--card'>
          <span className='list--number'>
            rotation time
          </span>
          <h1 className='footer--heading'>{data?.rotation}</h1>
        </div>
        <div className='mini--info--card'>
          <span className='list--number'>
            Revolution time
          </span>
          <h1 className='footer--heading'>{data?.revolution}</h1>
        </div>
        <div className='mini--info--card'>
          <span className='list--number'>
            Radius time
          </span>
          <h1 className='footer--heading'>{data?.radius}</h1>
        </div>
        <div className='mini--info--card'>
          <span className='list--number'>
            Average temp
          </span>
          <h1 className='footer--heading'>{data?.temperature}</h1>
        </div>
      </div>
    </div>
  )
}

export default PlanetPage