import React from 'react'
import BestSellers from '../BestSellers'

const SectionTwo= () => {

  const bestSellers = [
    {
      id: 1,
      img: {
        src: "images/egusi.jpeg",
        alt: 'Rice and Eforiro',
      },
      name: 'Rice and Eforiro',
      price: 3000,
    },
    {
      id: 2,
      img: {
        src: "images/asorted-jollof.jpeg",
        alt: 'asorted jollof',
      },
      name: 'Asorted Jollof',
      price: 2500,
    },
    {
      id: 3,
      img: {
        src: "images/African-Beef-Stew.jpeg",
        alt: 'Rice and Beef Stew',
      },
      name: 'Rice and Beef Stew',
      price: 2000,
    },
    {
      id: 4,
      img: {
        src: "images/Egusi-asorted-soup.jpeg",
        alt: 'Egusi Asorted Soup',
      },
      name: 'Egusi Asorted Soup',
      price: 2100,
    },
    {
      id: 5,
      img: {
        src: "images/Jollof-2.jpg",
        alt: 'Jollof Rice Special',
      },
      name: 'Jollof Rice Special',
      price: 2300,
    },
    {
      id: 6,
      img: {
        src: "images/yam-egg-sauce.jpeg",
        alt: 'Yam and Egg Sauce',
      },
      name: 'Yam and Egg Sauce',
      price: 1950,
    }
  ]

  const bestSellersmapped = bestSellers.map((item) => {


    return <BestSellers
    key={item.id}
    {...item}
    />
  })
    

  return (
    <div>
      <h1 className='Best-sellers-header'>Best Sellers</h1>
      <div className='best-sellers-container'>
        {bestSellersmapped}
      </div>
    </div>
  )
}

export default SectionTwo