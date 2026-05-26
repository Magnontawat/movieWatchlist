import React from 'react'
import MovieCard from './MovieCard'

const Section = ({title}) => {

    
  return (

    
    <div>

        <div>
            <h2>{title}</h2>
            <button>See all</button>
        </div>

    {/* ส่วนของ Card */}
        <MovieCard />

    </div>
    
  )
}

export default Section