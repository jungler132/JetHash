import React from 'react';
import Search from '../../components/Search';
import { ReactComponent as SvgAttention } from '../../assets/svg/Attention.svg';

const Home = ({ className }) => {
  return (
    <div className="home__main">
      <Search />
      <SvgAttention />
    </div>
  );
};

export default Home;
