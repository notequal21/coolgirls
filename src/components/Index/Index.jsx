import React, { Suspense } from 'react';
import Main from './Main/Main';
import GirlsSlider from './GirlsSlider/GirlsSlider';
// import CoolGirls from './CoolGirls/CoolGirls';
// import CoolCoin from './CoolCoin/CoolCoin';
// import Faqs from './Faqs/Faqs';
// import PlayEarn from './PlayEarn/PlayEarn';
// import Roadmap from './Roadmap/Roadmap';
// import Team from './Team/Team';
// import Sponsors from './Sponsors/Sponsors';

const CoolGirls = React.lazy(() => import('./CoolGirls/CoolGirls'));
const CoolCoin = React.lazy(() => import('./CoolCoin/CoolCoin'));
const Faqs = React.lazy(() => import('./Faqs/Faqs'));
const PlayEarn = React.lazy(() => import('./PlayEarn/PlayEarn'));
const Roadmap = React.lazy(() => import('./Roadmap/Roadmap'));
const Team = React.lazy(() => import('./Team/Team'));
const Sponsors = React.lazy(() => import('./Sponsors/Sponsors'));

let Index = () => {
  return (
    <>
      <Main />
      <GirlsSlider />
      <Suspense fallback={<div></div>}>
        <Sponsors />
        <Roadmap />
        <CoolCoin />
        <CoolGirls />
        <PlayEarn />
        <Faqs />
        <Team />
      </Suspense>

    </>
  )
}

export default Index