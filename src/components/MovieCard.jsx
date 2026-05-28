import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (info) => {
  const { title, release_date, poster_path, first_air_date,id } = info;

  const year =
    release_date?.slice(0, 4) || first_air_date?.slice(0, 4) || "N/A";
  
  return (
    <div>
      <Link to={`/detail/${id}`}>
        {/* รูปภาพการ์ด */}
        <div className="h-56 w-38 rounded-xl overflow-hidden ">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className="w-full h-full"
          />
        </div>

        {/* ชื่อหนังข้างร่างการ์ด */}
        <div className="pl-2">
          <p className="text-sm">{title}</p>
          <p className="text-xs text-[#979797]">{year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
