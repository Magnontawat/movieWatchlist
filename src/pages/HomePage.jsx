import React from "react";
import Section from "../components/Section";
import { Search,Popcorn   } from 'lucide-react'
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useTrendingTv } from "../hooks/useTrendingTv";
import { useNowShowing } from "../hooks/useNowShowing";
import { useUpComing } from "../hooks/useUpComing";
import { useTopRateMovies } from "../hooks/useTopRateMovies";
import { useTopRateTV } from "../hooks/useTopRateTV";

const HomePage = () => {

  const {moviesTrend}=useTrendingMovies()  
  const {tvTrending}=useTrendingTv()  
  const {nowShowing}=useNowShowing()  
  const {upComing}=useUpComing()  
  const {topRateMovies}=useTopRateMovies()  
  const {topRateTV}=useTopRateTV()  

  return (
    <div className="pb-30">

      {/*--------------------- Navbar -------------------*/}
      <div className="sticky top-0 z-50 bg-[#161616] pb-5 pt-1">
        
        {/* -------Header -------*/}
        <div className="flex items-center gap-5 mt-4 pb-3 pt-1 px-4 ">
          <div className="bg-violet-600 w-8 h-8 rounded-lg flex items-center justify-center">
           <Popcorn  className="w-5 h-5 text-[white]"/>
          </div>
          <div className="text-xl font-semibold text-white">WatchList</div>
        </div>

        {/* -------ช่อง search -----*/}
        <div className="bg-[grey] rounded-lg h-13 flex items-center gap-2 px-2 mx-4 mt-2 ">
          <Search className="w-6 h-6 text-white" />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search-movies & Tv shows"
          />
        </div>

      </div>
 
      {/* ---------------------รายการต่างๆ ------------------*/}
      {/*  Now Showing */}
      <Section title="Now Showing" movies={nowShowing} />
      {/*  upcoming */}
      <Section title="Upcoming" movies={upComing} />
      {/* trending movie */}
      <Section title="Trending Movies" movies={moviesTrend} />
      {/* Top Rated Movies*/}
      <Section title="Top Rated Movies EVER" movies={topRateMovies} />
      {/* Top Rated TV */}
      <Section title="Top Rated TV EVER" movies={topRateTV} />
      
    </div>
  );
};

export default HomePage;
