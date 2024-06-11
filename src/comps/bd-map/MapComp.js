import React, { useEffect, useRef } from "react";

const BaiduMap = ({ ak, center, zoom }) => {
  const { BMap } = window;
  const mapContainerRef = useRef(null);
  let map = null;

  const initializeMap = () => {
    map = new BMap.Map(mapContainerRef.current); // 创建Map实例
    const point = new BMap.Point(center.longitude, center.latitude); // 创建点坐标
    map.centerAndZoom(point, zoom); // 初始化地图,设置中心点坐标和地图级别
  };

  useEffect(() => {
    if (mapContainerRef.current) {
      initializeMap();
    }
  });

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "100vh", margin: "0 auto" }}
    />
  );
};

export default BaiduMap;
