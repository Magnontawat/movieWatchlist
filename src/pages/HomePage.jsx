import React from "react";
import Section from "../components/Section";
import { Search, Popcorn } from "lucide-react";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useTrendingTv } from "../hooks/useTrendingTv";
import { useNowShowing } from "../hooks/useNowShowing";
import { useUpComing } from "../hooks/useUpComing";
import { useTopRateMovies } from "../hooks/useTopRateMovies";
import { useTopRateTV } from "../hooks/useTopRateTV";
import BottomNav from "./../components/BottomNav";

const HomePage = () => {
  const { moviesTrend } = useTrendingMovies();
  const { tvTrending } = useTrendingTv();
  const { nowShowing } = useNowShowing();
  const { upComing } = useUpComing();
  const { topRateMovies } = useTopRateMovies();
  const { topRateTV } = useTopRateTV();

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
      
      <div className="bg-[grey] rounded-lg h-11 flex items-center gap-2 px-2 mx-4 mb-5">
        <Search className="w-6 h-6 text-white" />
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Search-movies & Tv shows"
        />
      </div>

      {/* ---------------------รายการต่างๆ ------------------*/}
      {/*  Now Showing */}
      <Section title="Now Showing" movies={nowShowing} />
      {/*  upcoming */}
      <Section title="Upcoming" movies={upComing} />
      {/* trending movie */}
      <Section title="Trending Movies" movies={moviesTrend} />
      {/* trending TV */}
      <Section title="Trending TV" movies={tvTrending} />
      {/* Top Rated Movies*/}
      <Section title="Top Rated Movies EVER" movies={topRateMovies} />
      {/* Top Rated TV */}
      <Section title="Top Rated TV EVER" movies={topRateTV} />
      <BottomNav />
    </div>
  );
};

export default HomePage;
