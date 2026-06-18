import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { useSeeAll } from "../hooks/useSeeAll";

const SeeAllPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { seeAllMovies, isLoading } = useSeeAll(category, page);

  const type = location.state?.type;

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
        <button
          onClick={() => navigate(-1)}
          className="z-5 absolute top-5 left-5 border rounded-xl w-12 h-8 flex justify-center items-center border-[white]"
        >
          <div className="text-[white]">Back</div>
        </button>

        <div className="text-white border-[white] flex justify-center text-3xl pb-5 ">
          {getTitle(category)}
        </div>
        <div className="grid grid-cols-2 gap-8  border-[white] px-2">
          {/* จุดmap */}
          {seeAllMovies.map((item) => {
            return (
              // ในการ์ด
              <Link
                to={`/detail/${item.id}`}
                className="w-full"
                key={item.id}
                state={{ type: type }}
              >
                {/* รูปภาพการ์ด */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="w-full rounded-xl"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </div>
                {/* ข้อความทั้งหมด */}
                <div className="text-sm text-[white] mt-2">
                  <div>{item.title}</div>
                  <p>{item.release_date?.slice(0, 4)}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button
            onClick={() => setPage(page + 1)}
            className="text-[#000000] border border-[#9d52f3] py-2 px-5 rounded-3xl bg-[#9d52f3]"
          >
            See More
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default SeeAllPage;
