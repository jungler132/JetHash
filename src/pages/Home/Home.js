import React from 'react';
import Search from '../../components/Search';
import { ReactComponent as SvgAttention } from '../../assets/svg/Attention.svg';
import Accordion from '../../components/Accordeon/Accordeon';

const obj = {
  name:'Anton Test Farm'
}

const Home = ({ className }) => {
  return (
    <div className="home__main">
      <div className='home__top'>
      <Search />
      <SvgAttention />
      </div>
      <div className='home__accordeon'>
      <Accordion title={obj.name} content="First Accordion content" />
      </div>
    </div>
  );
};

export default Home;
