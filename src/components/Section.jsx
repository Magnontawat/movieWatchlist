import React from "react";
import MovieCard from "./MovieCard";
import { dummyData } from "../data/dummyData";

const Section = ({ title }) => {
  return (
    <div className="pb-7">
      {/* ส่วนหัวของ Section */}
      <div className="flex justify-between mx-3 pb-1">
        <h2>{title}</h2>
        <button className="text-sm text-[#868686]"> See all </button>
      </div>

      {/* ส่วนของ Card */}
      <div className="flex justify-between gap-4 overflow-x-auto no-scrollbar">
        {dummyData.map((item) => {
          return <MovieCard key={item.id} title={item.title} year={item.year} poster={item.poster} />
        })}
      </div>
    </div>
  );
};

export default Section;
