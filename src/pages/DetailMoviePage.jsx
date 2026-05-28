import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailMoviePage = () => {
  const { id } = useParams();

  const mockData = {
    id: 1,
    title: "Jacky",
    imdbRate: 8.0,
    date: "22 Apr 2022",
    poster:
      "https://library.thaihealth.or.th/storage/book/image/121/08114400015077/M27Qxfni647WOFagfsHjrhixhyvqR4jdWmiKLoRX.jpg",
  };

  return (
    <div>
      <div className="relative">
        <img src={mockData.poster} className="h-140 w-full" />
        <div
          className="absolute bg-gradient-to-b bottom-0 left-0 right-0 h-full 
        from-transparent from-30%
        via-[#161616]/20 via-50%
        via-[#161616]/60 via-70%
        to-[#161616] to-90%"
        />
        <div className="absolute bottom-20 left-4 text-3xl font-semibold text-[#ffffff]">
          {mockData.title}
        </div>
        <div className="absolute bottom-14 text-xs left-4 text-white ">
          {mockData.date}
        </div>
        <div className="absolute bottom-6 left-4 flex items-center gap-2">
          <span className="text-[#fcff31] font-semibold text-sm">{mockData.imdbRate}</span>
          <span className='text-[#fcff31] font-semibold text-sm'>imdb</span>
        </div>
      </div>
    </div>
  );
};

export default DetailMoviePage;
