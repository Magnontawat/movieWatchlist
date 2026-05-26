import React from "react";
import MovieCard from "./MovieCard";
import { dummyData } from "../data/dummyData";

const Section = ({ title }) => {
  return (
    <div className="mt-7 py-4">
      {/* ส่วนหัวของ Section */}
      <div className="flex justify-between mx-4">
        <h2>{title}</h2>
        <button>See all</button>
      </div>

      {/* ส่วนของ Card */}
      <div className="flex justify-between h-50 border ">
        {dummyData.map((item) => {
          return <MovieCard key={item.id} title={item.title} year={item.year} poster={item.poster} />
        })}
      </div>
    </div>
  );
};

export default Section;
