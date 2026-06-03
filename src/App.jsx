import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import SettingPage from "./pages/SettingPage";
import DetailMoviePage from './pages/DetailMoviePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#161616] min-h-screen flex justify-center ">
        <div className="w-full relative md:max-w-[390px] md:border md:border-[#303030]">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
          <Route path="/setting" element={<SettingPage/>}/>
          <Route path="/detail/:id" element={<DetailMoviePage/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
