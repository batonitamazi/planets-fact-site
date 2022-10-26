import React from 'react'
import './filterbuttons.css'



function FilterButtons({buttons, handleClick, active, data}) {
    return (
        <div className='manage--buttons-container'>
            {buttons?.map((btn, index) => {
                return (
                    <button
                        className='manage--button'
                        key={index}
                        onClick={handleClick}
                        style={Number(active) === index ? { borderBottom: `4px solid ${data.color}`} : null}
                        value={index}
                    >
                        {btn.text}
                    </button>
                )
            })}
        </div>
    )
}

export default FilterButtons