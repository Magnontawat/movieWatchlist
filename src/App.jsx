import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'
import WatchlistPage from './pages/WatchlistPage'
import SettingPage from './pages/SettingPage'

function App() {
  return (
   <div className="bg-[#0f0f13] min-h-screen text-white max-w-sm mx-auto relative">
    <HomePage />
    <BottomNav />
   </div>
  )
}

export default App
