import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<HomePage/>} path='/' />
        <Route element={<ShopPage/>} path='/shop' />
      </Routes>
    </div>
  );
}

export default App;
