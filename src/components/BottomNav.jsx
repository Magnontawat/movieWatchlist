import React from "react";
import { House, Bookmark, Settings } from 'lucide-react'
import {Link} from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 bg-black border-t border-[#4d4d4d] flex py-3 w-full h-30 justify-between">
     
      <Link to="/" className=" borderborder-[white] flex-1  flex flex-col items-center justify-center ">
          <House size={30} className="text-[#7e7e7e]"/>
          <p className="text-[#7e7e7e]">Home</p>
      </Link>

      <Link to="/WatchlistPage" className=" border-[white]  flex-1 flex flex-col items-center justify-center">
          <Bookmark size={30} className="text-[#7e7e7e] "/>
          <p className="text-[#7e7e7e]">Watchlist</p>
      </Link>

      <Link to="/SettingPage" className=" border-[white]  flex-1 flex flex-col items-center justify-center">
          <Settings size={30} className="text-[#7e7e7e]"/>
          <p className="text-[#7e7e7e]">Setting</p>
      </Link>
    </div>
  );
};

export default BottomNav;
