import React from "react";

const MovieCard = (info) => {
  const { title, release_date, poster_path , first_air_date} = info;

  const year = release_date?.slice(0,4) ||  first_air_date ?.slice(0,4) || "N/A"

  return (
    <div>
      <div className="relative h-56 w-38 rounded-xl overflow-hidden ">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="w-full h-full" />
      </div>
      <div className="pl-2">
          <p className="text-md">{title}</p>
          <p className="text-xs text-[#979797]">{year}</p>
        </div>
    </div>
  );
};

export default MovieCard;
