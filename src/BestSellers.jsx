import React from 'react'

const BestSellers = (props) => {
  return (
    <div className='best-sellers'>
        <img src={props.img.src} alt={props.img.alt} />
        <div className='best-sellers__details'>
            <h3>{'\u20A6'}{props.price}</h3>
            <div>
                <h3>{props.name}</h3>
                <button>Buy</button>
            </div>
        </div>
    </div>
  )
}

export default BestSellers