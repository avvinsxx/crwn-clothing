import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomePage/>} path='/' />
        <Route element={<HatsPage/>} path='/hats' />
      </Routes>
    </div>
  );
}

export default App;
