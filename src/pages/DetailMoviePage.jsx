import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useDetailMovies } from "../hooks/useDetailMovies";
import BottomNav from "./../components/BottomNav";

const DetailMoviePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type;

  const { id } = useParams();
  const [data, isLoading] = useDetailMovies(id, type);
 
  const { respTMDB, respOMDB, keyForVideo } = data;

  const { poster_path, title, release_date, overview, name, first_air_date } =
    respTMDB || {};

  // เช็คก่อนว่ามีหนังเรื่องนี้ใน LocalStorage ไหม? เป็น boolean
  const [isInWatchlist, setIsInWatchlist ] = useState(false)

  //function เช็คทุกครั้งที่เปิดหน้าว่ามีหรือไม่มี
  useEffect(()=>{
    const current = JSON.parse(localStorage.getItem('watchlist') || '[]')
    const found = current.find(m => m.id === Number(id))
    setIsInWatchlist(!!found)
  },[id])

  //กรณีมี Watchlist และกดปุ่มเพื่อเอาออก และไม่มีหนังเพื่อเพิ่ม
  const handleWatchlist =()=>{
    if(isInWatchlist){
    const currentMovies = JSON.parse(localStorage.getItem('watchlist') || '[]')
    const updatedMovie = currentMovies.filter(m=>m.id !== Number(id))
    localStorage.setItem('watchlist',JSON.stringify(updatedMovie))
    setIsInWatchlist(false)
    }else{
    const currentMovies = JSON.parse(localStorage.getItem('watchlist') || '[]')
    const newMovie = {
      id:Number(id),
      title: title || name, poster_path,
      release_date: release_date || first_air_date,
      vote_average: respOMDB,
      type:type
    }
    localStorage.setItem('watchlist',JSON.stringify([...currentMovies, newMovie]))
    setIsInWatchlist(true)
    }
  }

 if (isLoading) return <div className="text-white">Loading.....</div>;

  return (
    <div className="pb-30">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="h-140 w-full object-cover block"
        />
        <button
          onClick={() => navigate(-1)}
          className="z-5 absolute top-5 left-5 border rounded-xl w-12 h-8 flex justify-center items-center border-[white]"
        >
          <div className="text-[white]">Back</div>
        </button>
        <div
          className="absolute bg-gradient-to-b bottom-0 left-0 right-0 h-full 
        from-transparent from-30%
        via-[#161616]/20 via-50%
        via-[#161616]/60 via-70%
        to-[#161616] to-90%"
        />
        <div className="absolute bottom-20 left-4 text-3xl font-semibold text-[#ffffff]">
          {title || name}{" "}
        </div>
        <div className="absolute bottom-14 text-xs left-4 text-white ">
          {release_date || first_air_date}
        </div>
        <div className="absolute bottom-6 left-4 flex items-center gap-2">
          <span className="text-[#fcff31] font-semibold text-sm">
            {respOMDB}
          </span>
          <span className="text-[#fcff31] font-semibold text-sm">imdb</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button 
        onClick={handleWatchlist}
        className={`  border border-[#000000] rounded-xl px-24 py-2 mb-3 ${isInWatchlist? 'bg-[#444] text-white border-[#444]' : 'bg-[#9d52f3] text-black border-black' }`}>
          {isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist' }
        </button>
      </div>
      <div className="relative h-50 mt-3">
        <iframe
          src={`https://www.youtube.com/embed/${keyForVideo}`}
          allowFullScreen
          className="absolute w-full h-50 px-5 rounded-xl"
        />
      </div>
      <div className="px-5 pt-5">
        <h3 className="text-[white]">Overview</h3>
        <span className="mt-5 text-[white] text-sm">{overview}</span>
      </div>
      <BottomNav />
    </div>
  );
};

export default DetailMoviePage;
