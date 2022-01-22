import CoolCoin from './CoolCoin/CoolCoin';
import CoolGirls from './CoolGirls/CoolGirls';
import Faqs from './Faqs/Faqs';
import GirlsSlider from './GirlsSlider/GirlsSlider';
import Main from './Main/Main';
import PlayEarn from './PlayEarn/PlayEarn';
import Roadmap from './Roadmap/Roadmap';
import Sponsors from './Sponsors/Sponsors';
import Team from './Team/Team';

let Index = () => {
  return (
    <>
      <Main />
      <GirlsSlider />
      <Sponsors />
      <Roadmap />
      <CoolCoin />
      <CoolGirls />
      <PlayEarn />
      <Faqs />
      <Team />
    </>
  )
}

export default Index