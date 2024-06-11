import React from 'react';
import './index.css';

import BaiduMap from '../../comps/bd-map/MapComp';
import MapApiLoaderHOC from '../../comps/msg-scroll/MsgScrollComp';

const Home = () => {
  const center = {
    longitude: 116.404,
    latitude: 39.915,
  };
  const zoom = 15;
  return (
    <div className="">
      <BaiduMap ak="OVgMJWD3i5EulKzpwYMdinhVu33BX91v" center={center} zoom={zoom} />
      <div className='msg-box'>
        <MapApiLoaderHOC/>
      </div>
    </div>
  );
};

export default Home;
