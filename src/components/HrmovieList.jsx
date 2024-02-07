import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/globalAPI';


const HrmovieList = ({itemId}) => {

  const [movieList,setMovieList] = useState([]);
  const ImageBaseUrl = "https://image.tmdb.org/t/p/original/";

  const carousel = useRef();

  const screenwidth = window.innerWidth;

  const slideLeft = (element)=>{
    element.scrollLeft-=screenwidth-110;
  }
  const slideRight = (element)=>{
    element.scrollLeft+=screenwidth-110;
  }

  useEffect(()=>{
    getGenereList(itemId);
  },[])

  const getGenereList = (id)=>{
    GlobalApi.getMovieByGenereId(id).then(res=>{
        console.log(res.data.results);
        setMovieList(res.data.results);
    })
  }  

  const Movies = movieList.map(item=>{
    return <div className='flex-col hover:scale-110 transition-all duration-500 ease-in-out'> 
        <div className='hover:shadow-lg hover:border border-blue-300 shadow-black transition-all duration-500 ease-in-out min-w-[200px] mr-5 rounded-lg'>
        <img src={ImageBaseUrl+item.backdrop_path} className='rounded-md object-cover object-left-top' alt="movie"/>
        </div>
        <p className='text-white text-xl p-2'>{item.title}</p>
    </div>
  })
    
  return (
    <div>
      <i onClick={()=>slideLeft(carousel.current)} class="bi bi-chevron-left text-white font-bold text-3xl absolute top-[40%] left-5 cursor-pointer hidden md:block"/>
      <i onClick={()=>slideRight(carousel.current)} class="bi bi-chevron-right text-white font-bold text-3xl absolute top-[40%] right-5 cursor-pointer hidden md:block"/>
      <div className='flex overflow-x-auto no-scrollbar w-full px-5 md:px-16 pt-4 scroll-smooth' ref={carousel}>
        {Movies}
      </div>
    </div>
  )
}

export default HrmovieList
