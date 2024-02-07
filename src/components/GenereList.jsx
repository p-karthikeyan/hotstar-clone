import React from 'react';
import genere from '../constants/genereList';
import MovieList from './MovieList';
import HrmovieList from './HrmovieList';

const GenereList = () => {

  return (
    <div className='z-[90]'>
    {
        genere.map((item,index)=>{
            return <div className='my-10 z-[90] relative'>
                <h2 className='text-white z-[90] w-fit uppercase mx-16 text-xl my-2'>{item.name}</h2>
                {index%3==0?<HrmovieList itemId={item.id}/>:<MovieList itemId={item.id}/>}
                
            </div>
        })
    }  
    </div>
  )
}

export default GenereList
