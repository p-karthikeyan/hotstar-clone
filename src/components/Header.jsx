import React, { useState } from 'react'
import logo from '../assets/disney.png'

const Header = () => {

  const [toggler,setToggler] = useState(false);

  const menu = [
    {
      option:"HOME",
      icon:<i class="bi bi-house-fill"></i>
    },
    {
      option:"SEARCH",
      icon:<i class="bi bi-search"></i>
    },
    {
      option:"WATCHLIST",
      icon:<i class="bi bi-plus-circle"></i>
    },
    {
      option:"ORIGINALS",
      icon:<i class="bi bi-star-fill"></i>
    },
    {
      option:"MOVIES",
      icon:<i class="bi bi-film"></i>
    },
    {
      option:"SERIES",
      icon:<i class="bi bi-camera-reels-fill"></i>
    },
  ]

  const DesktopMenu = menu.map((men)=>{
    return <div className='flex items-center gap-4 p-2 cursor-pointer hover:underline underline-offset-8'>
              {men.icon}<p className=''>{men.option}</p>
          </div>
  })
  const MobileMenu = menu.map((menu,ind)=>{
    return ind<3 &&<div className='flex items-center gap-4 p-2 cursor-pointer hover:underline underline-offset-8'>
              {menu.icon}<p className='hidden lg:block'>{menu.option}</p>
          </div>
})
const DropMenu = menu.map((menu,ind)=>{
  return ind>=3 &&<div className='flex items-center gap-4 p-2 cursor-pointer hover:underline underline-offset-8'>
            {menu.icon}<p className=''>{menu.option}</p>
        </div>
})

  return (
    <div className='mx-5 md:mx-10 flex items-center justify-between text-gray-300'>
      <div className='flex gap-8 items-center'>
        <img src={logo} alt='logo' className='w-[80px] md:w-[115px]'/>
        <div className='hidden lg:flex gap-8'>
          {DesktopMenu}
        </div>
        <div className='lg:hidden flex gap-4'>
          {MobileMenu}
          <div className='relative p-2 cursor-pointer'>
          <i class="bi bi-three-dots-vertical" onClick={()=>setToggler(!toggler)}></i>
          {toggler&&
          <div className='absolute right-[-100%] mt-4 border border-gray-700 bg-black rounded-md p-2'>
          {DropMenu}
          </div>}
          </div>
        </div>
      </div>
      <img className='w-[40px] rounded-full border cursor-pointer' src='https://www.shutterstock.com/image-vector/anime-style-game-avatar-mascot-600nw-2322112663.jpg' alt='profile'/>
    </div>
  )
}

export default Header
