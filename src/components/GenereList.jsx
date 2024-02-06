import React from 'react';
import genere from '../constants/genereList';
import MovieList from './MovieList';

const GenereList = () => {

  return (
    <div>
    {
        genere.map((item,index)=>{
            return <div className='my-10'>
                <h2 className='text-white uppercase mx-16 text-xl my-5'>{item.name}</h2>
                <MovieList itemId={item.id} index={index}/>
            </div>
        })
    }  
    </div>
  )
}

export default GenereList
