import React from "react";
import Section from "../components/Section";
import { Search,Popcorn   } from 'lucide-react'
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useTrendingTv } from "../hooks/useTrendingTv";

const HomePage = () => {

  const {moviesTrend}=useTrendingMovies()  
  const {tvTrending}=useTrendingTv()  
  
  return (
    <div className="pt-3 pb-35">

      {/* Header */}
      <div className="sticky top-0 z-100 bg-[#161616] pb-5">
        <div className="flex items-center gap-5 mt-4 py-3 px-4 ">
          <div className="bg-violet-600 w-8 h-8 rounded-lg flex items-center justify-center">
           <Popcorn  className="w-5 h-5 text-[white]"/>
          </div>
          <div className="text-xl font-semibold text-white">WatchList</div>
        </div>

        {/* ช่อง search */}
        <div className="bg-[grey] rounded-lg h-13 flex items-center gap-2 px-2 mx-4 mt-2 ">
          <Search className="w-6 h-6 text-white" />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search-movies & Tv shows"
          />
        </div>
      </div>


{/* รายการต่างๆ */}
      {/* trending movie */}
      <Section title="Trending Movies" movies={moviesTrend} />
      {/* trending Tv */}
      <Section title="Trending Tv" movies={tvTrending} />
      {/*  Now Playing */}
      {/* <Section title="Now Playing" /> */}
      {/* On The Air */}
      {/* <Section title="On The Air" /> */}

    </div>
  );
};

export default HomePage;
