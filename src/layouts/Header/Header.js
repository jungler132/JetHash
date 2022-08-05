import React from 'react';
import { ReactComponent as SvgFarmHash } from '../../assets/svg/JetHash.svg';

const Header = ({ className }) => {
  const array = [
    {
      name: 'etchash',
      number: '1.50 Gh',
    },
    {
      name: 'ethash',
      number: '2.60 Gh',
    },
    {
      name: 'firopow',
      number: '72.54 Mh',
    },
    {
      name: 'kaspa',
      number: '13.50 Mh',
    },
    {
      name: 'x17',
      number: '1.99 Mh',
    },
    {
      name: 'sha256',
      number: '0.01 Th',
    },
    {
      name: 'autolykos2',
      number: '0.82 Mh',
    },
  ];

  return (
    <div>
      <div className="header__top_text">
        <SvgFarmHash />
        <h1 className="header__title_text">Farm Monitoring</h1>
      </div>
      <div className="header__inner_space">
        {array.map((item, index) => {
          return (
            <div key={index} className="header__inner_block">
              <p className="header__inner_text_name">{item.name}</p>
              <p className="header__inner_text_number">{item.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
