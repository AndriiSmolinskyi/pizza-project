import './App.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Cart } from './components/Cart/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="app">
        <div className="wrapper">
          <Header />
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
