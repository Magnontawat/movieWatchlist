import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import { Search, Popcorn } from "lucide-react";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useTrendingTv } from "../hooks/useTrendingTv";
import { useNowShowing } from "../hooks/useNowShowing";
import { useUpComing } from "../hooks/useUpComing";
import { useTopRateMovies } from "../hooks/useTopRateMovies";
import { useTopRateTV } from "../hooks/useTopRateTV";
import { useFetchSearch } from "../hooks/useFetchSearch";
import BottomNav from "./../components/BottomNav";
import { Form } from "react-router-dom";


const HomePage = () => {
  const { moviesTrend } = useTrendingMovies();
  const { tvTrending } = useTrendingTv();
  const { nowShowing } = useNowShowing();
  const { upComing } = useUpComing();
  const { topRateMovies } = useTopRateMovies();
  const { topRateTV } = useTopRateTV();
  
  const [textInput, setTextInput] = useState("");
  const {searchResults,qty} = useFetchSearch(textInput)

  const submitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#161616] pb-20">
      {/*--------------------- Navbar -------------------*/}

      {/* -------Header -------*/}
      <div className="flex items-center gap-2 px-2 pt-12 pb-4 ">
        <div className="bg-violet-600 w-8 h-8 rounded-lg flex items-center justify-center ml-3">
          <Popcorn className="w-5 h-5 text-[white]" />
        </div>
        <div className="text-lg font-semibold text-white">WatchList</div>
      </div>

      {/* -------ช่อง search -----*/}
      <div className="relative mx-4 mb-5">
        <form
          onSubmit={submitSearch}
          className="bg-[#444444] rounded-lg h-11 flex items-center gap-2 px-2 "
        >
          <Search className="w-6 h-6 text-white" />
          <input
            className="w-full outline-none text-white"
            type="text"
            value={textInput}
            placeholder="Search-movies & Tv shows"
            onChange={(e) => setTextInput(e.target.value)}
          />
        </form>
        <div
          className={`absolute transition-all duration-200 my-2 py-3 w-full
            ${
              textInput
                ? "opacity-100 translate-y-0 bg-[#444444] rounded-xl text-[white] px-5 my-3"
                : "opacity-0 -translate-y-2 pointer-evenrs-none"
            }
            `}
        >
          {/* result */}

          <div className="text-[#999696] text-sm">
            {qty} RESULTS
          </div>

          {/* จุด map */}
          <div>
            {searchResults.map((item)=>{
              return <div className="my-2" key={item.id}>{item.title || item.name}</div>
            })}
            
          </div>
        </div>

      </div>
      {/* ---------------------รายการต่างๆ ------------------*/}
      {/*  Now Showing */}
      <Section title="Now Showing" movies={nowShowing} type="movie" />
      {/*  upcoming */}
      <Section title="Upcoming" movies={upComing} type="movie" />
      {/* trending movie */}
      <Section title="Trending Movies" movies={moviesTrend} type="movie" />
      {/* trending TV */}
      <Section title="Trending TV" movies={tvTrending} type="tv" />
      {/* Top Rated Movies*/}
      <Section
        title="Top Rated Movies EVER"
        movies={topRateMovies}
        type="movie"
      />
      {/* Top Rated TV */}
      <Section title="Top Rated TV EVER" movies={topRateTV} type="tv" />
      <BottomNav />
    </div>
  );
};

export default HomePage;
