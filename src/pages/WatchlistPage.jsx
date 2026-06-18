import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import { Link, useLocation } from "react-router-dom";

const WatchlistPage = () => {
  const location = useLocation();

  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const movieWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]",
    );
    setWatchlist(movieWatchlist);
  }, []);

  console.log(watchlist);

  return (
    <div className="min-h-screen text-white relative">
      <div className="flex justify-center pt-7 text-3xl pb-5">Watchlist</div>

      {watchlist.length > 0 ? (
        <div className="grid grid-cols-2 gap-8 border-[white] px-2">
          {watchlist.map((item) => (
            <Link
              to={`/detail/${item.id}`}
              key={item.id}
              state={{ type: item.type }}
            >
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
              </div>
              <div className="text-sm text-[white] mt-2">
                <div>{item.title}</div>
                <p>{item.release_date?.slice(0, 4)}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex min-h-screen absolute top-100 right-28 text-[#636363]">
          <p>ไม่มีข้อมูล</p> <p>Watchlist ในรายการ</p>
        </div>
      )}
      <BottomNav />
    </div>
  );
};

export default WatchlistPage;
