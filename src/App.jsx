import BottomNav from "./components/BottomNav";
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import SettingPage from "./pages/SettingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#161616] min-h-screen text-white max-w-auto mx-auto relative">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
          <Route path="/setting" element={<SettingPage/>}/>
        </Routes>
      </div>
      <BottomNav/>
    </BrowserRouter>
  );
}

export default App;
