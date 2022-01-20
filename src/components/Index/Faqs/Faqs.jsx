import { useState } from 'react';
import style from './Faqs.module.scss'

let Faqs = () => {

  const accordionData = [
    {
      title: 'HOW TO MINT? ',
      content: `Join our Discord (https://discord.gg/BabyGhosts) server or Twitter (https://twitter.com/BabyGhosts_NFT) account and jump in on the conversation & share your ideas!`
    },
    {
      title: 'OUR PROMOTION',
      content: `Join our Discord (https://discord.gg/BabyGhosts) server or Twitter (https://twitter.com/BabyGhosts_NFT) account and jump in on the conversation & share your ideas!`
    },
    {
      title: 'What is an NFT?',
      content: `Join our Discord (https://discord.gg/BabyGhosts) server or Twitter (https://twitter.com/BabyGhosts_NFT) account and jump in on the conversation & share your ideas!`
    },
    {
      title: 'That sounds great, how do I get in?',
      content: `Join our Discord (https://discord.gg/BabyGhosts) server or Twitter (https://twitter.com/BabyGhosts_NFT) account and jump in on the conversation & share your ideas!`
    },
    {
      title: 'What about Tokenomics?',
      content: `Join our Discord (https://discord.gg/BabyGhosts) server or Twitter (https://twitter.com/BabyGhosts_NFT) account and jump in on the conversation & share your ideas!`
    }
  ];

  return (
    <>
      <div className={style.faqs}>
        <div className="container">
          <div className={style.faqs__title}>
            FAQ'S
          </div>
          <div className={style.faqsBody}>
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.faqsBody__item}>
      <div className={style.faqsBody__itemTitle} onClick={() => setIsActive(!isActive)}>
        {title}
        <div className={`${style.faqsBody__itemBtn} ${isActive ? style.open : ''}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      {isActive && <div className={style.faqsBody__itemContent}>{content}</div>}
    </div>
  );
};

export default Faqs