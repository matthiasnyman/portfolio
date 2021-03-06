import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Data from './data.json';
import DisplayComponent from './DisplayComponent';

import logo from './img/logo.svg';
import arrow from './img/arrow.svg';

const LayoutComponent = () => {
  const [data, setData] = useState(Data.view);
  const [index, setIndex] = useState(0);
  const layout = [];

  data.forEach((item) => {
    layout.push(<DisplayComponent key={`component_${item.id}`} data={item} />);
  });

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const handleClick = (i) => {
    if (i && index < data.length - 1) {
      setIndex(index + 1);
    } else if (!i && index !== 0) {
      setIndex(index - 1);
    } else if (!i && index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(0);
    }
  };

  const style = {
    with: '100%',
    height: '100%',
  };

  return (
    <div className="background">
      <img
        src={logo}
        onClick={() => setIndex(0)}
        className="App-logo"
        alt="logo"
      />

      <SwipeableViews
        enableMouseEvents
        index={index}
        onChangeIndex={handleChangeIndex}
      >
        {layout}
      </SwipeableViews>
      <div className="arrow-group">
        <div style={style} onClick={() => handleClick(false)}>
          <span className="arrow" id="back"></span>
        </div>

        <div
          className="arrow"
          id="next"
          onClick={() => handleClick(true)}
        ></div>
      </div>
      {index === 0 ? (
        <img src={arrow} className="swipe-arror" alt="swipe arrow" />
      ) : null}
    </div>
  );
};

export default LayoutComponent;
