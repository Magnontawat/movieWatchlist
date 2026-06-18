import React from "react";
import MovieCard from "./MovieCard";
import { Link } from 'react-router-dom';

const Section = ({ title, movies =[], type , category }) => {

  return (
    <div className="pb-3">
      
      {/* ส่วนหัวของ Section */}
      <div className="flex justify-between mx-3 pb-1">
        <h2 className="text-[white]">{title}</h2>
        <Link to={`/seeall/${category}` } state={{type : type}} className="text-sm text-[#868686] hover:text-[white]"> See all </Link>
      </div>

      {/* ส่วนของ Card */}
      <div className="flex gap-5 overflow-x-auto styled-scrollbar px-3 md:styled-scrollbar pb-1">
        {movies.map((item) => {
          return <MovieCard key={item.id} title={item.title || item.name} release_date={item.release_date} poster_path={item.poster_path} first_air_date={item.first_air_date} id={item.id} type={type}/>
        })}
      </div>
    </div>
  );
};
export default Section;
