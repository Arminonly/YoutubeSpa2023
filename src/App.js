import './App.css';
import Auth from './components/auth/Auth';
import Registry from './components/registry/Registry';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/search/Search';
import Favourites from './pages/favourites/Favourites';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route index path="/" element={<Auth />} />
        <Route path="/registry" element={<Registry />} />
        <Route  path="/main" element={<Main />}/>
        <Route path="/main/search" element={<Search/>} />
        <Route path="/main/favourites" element={<Favourites/>} />




      </Routes>
    </div>
  );
}

export default App;
