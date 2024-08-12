import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Th from './components/Proccesed/Th';

function App() {
  return (
    <>

    <DataProvider>
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<MainPage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path='/Th' element={<Th />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
    </>
  );

}

export default App;
