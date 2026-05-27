import React from "react";

const MovieCard = (info) => {
  const { title, year, poster } = info;

  return (
    <div>
      <div className="relative h-56 w-38 rounded-xl overflow-hidden ">
        <img src={poster} className="w-full h-full" />
      </div>
      <div className="pl-2">
          <p className="text-md">{title}</p>
          <p className="text-xs text-[#979797]">{year}</p>
        </div>
    </div>
  );
};

export default MovieCard;
