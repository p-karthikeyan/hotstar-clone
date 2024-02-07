import React from 'react'

import disney from '../assets/disney.png'
import natgeo from '../assets/natGeo.png'
import pixar from '../assets/pixar.png'
import starwar from '../assets/starwar.png'
import marvel from '../assets/marvel.png'

import disneyv from '../assets/disney.mp4'
import natgeov from '../assets/natGeo.mp4'
import pixarv from '../assets/pixar.mp4'
import starwarv from '../assets/starWars.mp4'
import marvelv from '../assets/marvel.mp4'


const ProductionHouse = () => {

    const prod =  [
        {
            name:"Disney",
            image:disney,
            video:disneyv
        },
        {
            name:"Pixar",
            image:pixar,
            video:pixarv
        },
        {
            name:"StarWar",
            image:starwar,
            video:starwarv
        },
        {
            name:"Marvel",
            image:marvel,
            video:marvelv
        },
        {
            name:"NatGeo",
            image:natgeo,
            video:natgeov
        },
    ]

  return (
    <div className='flex gap-5 md:gap-20 px-5 md:px-16 overflow-x-auto no-scrollbar scroll-smooth my-5'>
        {
            prod.map(item=>{
                return <div className='relative min-w-[200px] my-5 cursor-pointer rounded-md hover:scale-110 transition-all duration-500 ease-out hover:border-2 hover:border-blue-300 shadow-lg shadow-black'>
                        <video src={item.video} className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-[50%]' autoPlay loop playsInline muted/>
                        <img src={item.image} className='z-[100]' alt="image"/>
                    </div>
            })
        }
    </div>
  )
}

export default ProductionHouse
