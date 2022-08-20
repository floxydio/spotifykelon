import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import MusicList from './pages/MusicList/MusicList';
import Favorite from './pages/Favorite/Favorite';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/music-list' element={<MusicList />} />
              <Route path='/favorite' element={<Favorite />} />
        </Routes>      
      </BrowserRouter>

    </>
  );
}

export default App;
