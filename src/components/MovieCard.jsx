import React from 'react'

const MovieCard = (info) => {

  const {title,year,poster} = info
  
  return (
    <div>
        <div>
          <img src={poster}/>
          <p>MOVIE{title}</p>
        </div>
        <div>
          <p>{title}</p>
          <p>{year}</p>
        </div>
    </div>
  )
}

export default MovieCard