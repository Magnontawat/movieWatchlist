import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import { useParams } from "react-router-dom";
import { useSeeAll } from "../hooks/useSeeAll";
import { Link } from "react-router-dom"

const SeeAllPage = () => {
  const { category } = useParams();

  const [page, setPage] = useState(1);

  const { seeAllMovies, totalPages, isLoading } = useSeeAll(category, page);

  console.log(seeAllMovies);

  const getTitle = (category) => {
    switch (category) {
      case "now_playing":
        return "Now Showing";
      case "upcoming":
        return "Upcoming";
      case "trending_movies":
        return "Trending Movies";
      case "trending_tv":
        return "Trending TV";
      case "top_rated_movies_ever":
        return "Top Rated Movies All the Time";
      case "top_rated_tv_ever":
        return "Top Rated TV All the Time";
      default:
        return "Movies";
    }
  };

  if (isLoading) return <div className="text-white">Loading.....</div>;

  return (
    <div>
      <div className="px-2 pt-8 pb-35 ">
        {/* รายละเอียดการ์ด */}

        <div className="text-white border-[white] flex justify-center text-3xl pb-5 ">
          {getTitle(category)}
        </div>
        <div className="grid grid-cols-2 gap-8  border-[white] px-2">
          
          {/* จุดmap */}
          {seeAllMovies.map((item) => {
            return (
              // ในการ์ด
              <Link to={`/detail/${item.id}`} className="w-full" key={item.id}>
                {/* รูปภาพการ์ด */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="w-full rounded-xl"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </div>
                {/* ข้อความทั้งหมด */}
                <div className="text-[white]">{item.title}</div>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-center mt-10">
          <div className="text-[#000000] border border-[#9d52f3] py-2 px-5 rounded-3xl bg-[#9d52f3]">See More</div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default SeeAllPage;
