import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomePage/>} path='/' />
        <Route element={<ShopPage/>} path='/shop' />
      </Routes>
    </div>
  );
}

export default App;
