import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/globalAPI';


const MovieList = ({itemId,index}) => {

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
    return <img src={ImageBaseUrl+item.backdrop_path} className='hover:border-4 hover:shadow-lg shadow-black border-gray-300 transition-all duration-200 ease-in-out w-[300px] md:h-[400px] mr-5 rounded-lg object-cover object-left-top' alt="movie"/>
  })
    
  return (
    <div>
      <i onClick={()=>slideLeft(carousel.current)} class="bi bi-chevron-left text-white font-bold text-3xl absolute top-[40%] left-5 cursor-pointer hidden md:block"/>
      <i onClick={()=>slideRight(carousel.current)} class="bi bi-chevron-right text-white font-bold text-3xl absolute top-[40%] right-5 cursor-pointer hidden md:block"/>
      <div className='flex overflow-x-auto no-scrollbar w-full px-16 py-4 scroll-smooth' ref={carousel}>
        {Movies}
      </div>
    </div>
  )
}

export default MovieList

