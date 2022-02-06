import { Route, Routes } from 'react-router-dom';
import './App.css';
import Builder from './components/Builder/Builder';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Index from './components/Index/Index';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/builder' element={<Builder />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
