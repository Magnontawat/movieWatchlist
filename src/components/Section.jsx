import React from "react";
import MovieCard from "./MovieCard";

const Section = ({ title,movies =[] }) => {

  return (
    <div className="pb-7">
      {/* ส่วนหัวของ Section */}
      <div className="flex justify-between mx-3 pb-1">
        <h2>{title}</h2>
        <button className="text-sm text-[#868686]"> See all </button>
      </div>

      {/* ส่วนของ Card */}
      <div className="flex justify-between gap-4 overflow-x-auto no-scrollbar">
        {movies.map((item) => {
          return <MovieCard key={item.id} title={item.title || item.name} release_date={item.release_date} poster_path={item.poster_path} first_air_date={item.first_air_date} />
        })}
      </div>
    </div>
  );
};

export default Section;
