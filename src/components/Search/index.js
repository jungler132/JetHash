import React from 'react';
import { ReactComponent as SvgSearchIcon } from '../../assets/svg/SearchIcon.svg';

const Search = ({ className }) => {
  return (
    <div className="search__main">
      <div className="search__main_input">
        <SvgSearchIcon />
        <input
          className="search__input_main"
          placeholder="User / Rig / Status / Algo / Coin / Pool / Wallet / Conf_name"
        />
      </div>
    </div>
  );
};

export default Search;
