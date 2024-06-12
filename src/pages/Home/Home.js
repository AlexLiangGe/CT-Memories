import React from "react";
import { useNavigate } from 'react-router-dom';
import "./index.css";

import BaiduMap from "../../comps/bd-map/MapComp";
import MsgScrollComp from "../../comps/msg-scroll/MsgScrollComp";

const Home = () => {
  const navigate = useNavigate();

  const center = {
    longitude: -73.9712,
    latitude: 40.7831,
  };
  const zoom = 6;

  const GoToAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="">
      <BaiduMap
        ak="OVgMJWD3i5EulKzpwYMdinhVu33BX91v"
        center={center}
        zoom={zoom}
      />
      <div className="msg-box">
        <MsgScrollComp />
      </div>
      <div className="nav-admin-box" onClick={GoToAdmin}>
        <span>Navigate to the admin dashboard</span>
      </div>
    </div>
  );
};

export default Home;
