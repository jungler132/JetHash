import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as SVGMinus } from '../../assets/svg/MinusClose.svg';
import { ReactComponent as SVGPlus } from '../../assets/svg/PlusOpen.svg';
import { ReactComponent as SVGGreen } from '../../assets/svg/GreenLight.svg';
import { ReactComponent as SVGRed } from '../../assets/svg/RedLight.svg';
import './Accordeon.css';

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    console.log('Height for ', props.title, ': ', height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? '0px' : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{props.title}</p>
        <div className="accordion__hashrates__block">
          <p className="accordion__hashrates__title">Total farm hashrates:</p>
          <p className="accordion__hashrates__data"> [ETH] ethash 9.3 Gh</p>
        </div>
        <span>{active ? <SVGMinus /> : <SVGPlus />}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div className="accordion__options">
          <table>
            <thead className="accordion__table_options">
              <tr>
                <th className="accordion__rig_name">Rig Name</th>
                <th className="accordion__last_request">Last request</th>
                <th className="accordion__algo">Algo</th>
                <th className="accordion__coin">Coin</th>
                <th className="accordion__pool">Pool</th>
                <th className="accordion__login_wallet">Login/Wallet</th>
                <th className="accordion__troubles">Troubles</th>
                <th className="accordion__hashrate">Hashrate</th>
                <th className="accordion__conf_name">Conf_name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="accordion__table_data">
                {/* <SVGGreen /> */}
                <td className="accordion__content_bottom_text">
                  01-Dom34-green5
                </td>
                <td className="accordion__content_bottom_text">
                  17.07.22/18:17
                </td>
                <td className="accordion__content_bottom_text">ethash</td>
                <td className="accordion__content_bottom_text">ETC</td>
                <td className="accordion__content_bottom_text">
                  eu1.ethermine.org:4444
                </td>
                <td className="accordion__content_bottom_text">0x07...513c</td>
                <td className="accordion__content_bottom_text_request">
                  NO_REQUESTS
                </td>
                <td className="accordion__content_bottom_text">
                  ethash: 329.9 Mh
                </td>
                <td className="accordion__content_bottom_text">3% Config</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__options"
        >
          <div className="accordion__rig_name">Rig Name</div>
          <div className="accordion__last_request">Last request</div>
          <div className="accordion__algo">Algo</div>
          <div className="accordion__coin">Coin</div>
          <div className="accordion__pool">Pool</div>
          <div className="accordion__login_wallet">Login/Wallet</div>
          <div className="accordion__troubles">Troubles</div>
          <div className="accordion__hashrate">Hashrate</div>
          <div className="accordion__conf_name">Conf_Name</div>
        </div>
      </div> */}
      {/* <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__options_data"
        >
          <SVGGreen/>
          <div className="accordion__content_bottom_text">01-Dom34-green5</div>
          <div className="accordion__content_bottom_text">17.07.22/18:17</div>
          <div className="accordion__content_bottom_text">ethash</div>
          <div className="accordion__content_bottom_text">ETC</div>
          <div className="accordion__content_bottom_text">eu1.ethermine.org:4444</div>
          <div className="accordion__content_bottom_text">0x07...513c</div>
          <div className="accordion__content_bottom_text_request">NO_REQUESTS</div>
          <div className="accordion__content_bottom_text">ethash: 329.9 Mh</div>
          <div className="accordion__content_bottom_text">3% Config</div>
          
        </div>
      </div> */}
    </div>
  );
}

export default Accordion;
