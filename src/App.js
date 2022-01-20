import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CoolCoin from './components/Index/CoolCoin/CoolCoin';
import CoolGirls from './components/Index/CoolGirls/CoolGirls';
import Faqs from './components/Index/Faqs/Faqs';
import Main from './components/Index/Main/Main';
import PlayEarn from './components/Index/PlayEarn/PlayEarn';
import Roadmap from './components/Index/Roadmap/Roadmap';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className="content">
          <Main />

          <Roadmap />
          <CoolCoin />
          <CoolGirls />
          <PlayEarn />
          <Faqs />
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
