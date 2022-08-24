import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as SVGMinus } from '../../assets/svg/MinusClose.svg';
import { ReactComponent as SVGPlus } from '../../assets/svg/PlusOpen.svg';
import { ReactComponent as SVGGreen } from '../../assets/svg/GreenLight.svg';
import { ReactComponent as SVGRed } from '../../assets/svg/RedLight.svg';
import "./Accordeon.css";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{props.title}</p>
        <div className="accordion__hashrates__block">
            <p className="accordion__hashrates__title">Total farm hashrates:</p>
            <p className="accordion__hashrates__data"> [ETH] ethash 9.3 Gh</p>
        </div>
        <span>{active ? <SVGMinus/> : <SVGPlus/>}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__options"
        >
          <p className="accordion__rig_name">Rig Name</p>
          <p className="accordion__last_request">Last request</p>
          <p className="accordion__algo">Algo</p>
          <p className="accordion__coin">Coin</p>
          <p className="accordion__pool">Pool</p>
          <p className="accordion__login_wallet">Login/Wallet</p>
          <p className="accordion__troubles">Troubles</p>
          <p className="accordion__hashrate">Hashrate</p>
          <p className="accordion__conf_name">Conf_Name</p>
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__options"
        >
          <SVGGreen/>
          <p className="accordion__content_bottom_text">01-Dom34-green5</p>
          <p className="accordion__content_bottom_text">17.07.22/18:17</p>
          <p className="accordion__content_bottom_text">ethash</p>
          <p className="accordion__content_bottom_text">ETC</p>
          <p className="accordion__content_bottom_text">eu1.ethermine.org:4444</p>
          <p className="accordion__content_bottom_text">0x07...513c</p>
          <p className="accordion__content_bottom_text_request">NO_REQUESTS</p>
          <p className="accordion__content_bottom_text">ethash: 329.9 Mh</p>
          <p className="accordion__content_bottom_text">3% Config</p>
          
        </div>
      </div>
    </div>
  );
}

export default Accordion;
