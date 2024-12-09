import './App.css'
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import ChatBot from './components/pages/ChatBot';
import LandingPage from './components/pages/LandingPage';
import Footer from './components/Footer';
import DungeonCrawler from './components/pages/DungeonCrawler';
import AudioChatBot from './components/pages/AudioChatBot';


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='' element={<Outlet />}>
          <Route index element={<LandingPage />} />
          <Route path='/chat' element={<ChatBot />} />
          <Route path='/game' element={<DungeonCrawler />} />
          <Route path='/speak' element={<AudioChatBot />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
