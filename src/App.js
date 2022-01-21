import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CoolCoin from './components/Index/CoolCoin/CoolCoin';
import CoolGirls from './components/Index/CoolGirls/CoolGirls';
import Faqs from './components/Index/Faqs/Faqs';
import GirlsSlider from './components/Index/GirlsSlider/GirlsSlider';
import Main from './components/Index/Main/Main';
import PlayEarn from './components/Index/PlayEarn/PlayEarn';
import Roadmap from './components/Index/Roadmap/Roadmap';
import Sponsors from './components/Index/Sponsors/Sponsors';
import Team from './components/Index/Team/Team';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className="content">
          <Main />
          <GirlsSlider />
          <Sponsors />
          <Roadmap />
          <CoolCoin />
          <CoolGirls />
          <PlayEarn />
          <Faqs />
          <Team />
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
