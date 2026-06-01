import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDetailMovies } from "../hooks/useDetailMovies";
import BottomNav from "./../components/BottomNav";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailMoviePage = () => {
  
  const location = useLocation()
  const type = location.state?.type
  const { id } = useParams();
  const [data, isLoading] = useDetailMovies(id,type);

  if (isLoading) return <div className="text-white">Loading.....</div>;

  const { respTMDB, respOMDB, keyForVideo } = data;

  const { poster_path, original_title, release_date, overview } = respTMDB || {};

  return (
    <div className="pb-30">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="h-140 w-full object-cover block"
        />
        <Link to="/" className="z-5 absolute top-5 left-5 border rounded-xl w-12 h-8 flex justify-center items-center border-[white]">
          <div className="text-[white]">Back</div>
        </Link>
        <div
          className="absolute bg-gradient-to-b bottom-0 left-0 right-0 h-full 
        from-transparent from-30%
        via-[#161616]/20 via-50%
        via-[#161616]/60 via-70%
        to-[#161616] to-90%"
        />
        <div className="absolute bottom-20 left-4 text-3xl font-semibold text-[#ffffff]">
          {original_title}        </div>
        <div className="absolute bottom-14 text-xs left-4 text-white ">
          {release_date}
        </div>
        <div className="absolute bottom-6 left-4 flex items-center gap-2">
          <span className="text-[#fcff31] font-semibold text-sm">
            {respOMDB}
          </span>
          <span className="text-[#fcff31] font-semibold text-sm">imdb</span>
        </div>
      </div>

      <div className="relative h-50 mt-3">
        <iframe
          src={`https://www.youtube.com/embed/${keyForVideo}`}
          allowFullScreen
          className="absolute w-full h-50 px-5 rounded-xl"
        />
      </div>
      <div className="px-5 pt-3">
        <h3 className="text-[white]">Overview</h3>
        <span className="mt-5 text-[white] text-sm">{overview}</span>
      </div>
      <BottomNav/>
    </div>
  );
};

export default DetailMoviePage;
