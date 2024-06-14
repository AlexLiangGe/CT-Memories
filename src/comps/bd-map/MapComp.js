import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const BaiduMap = ({ ak, center, zoom }) => {
  const navigate = useNavigate();
  const { BMap } = window;
  const mapContainerRef = useRef(null);
  let map = null;
  const [cornellTechGraduates, setCornellTechGraduates] = useState([]);
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === "true";
    if (!isLogin) {
      navigate("/login");
      return;
    }

    const storedData = localStorage.getItem("cornellTechGraduates");
    if (storedData) {
      setCornellTechGraduates(JSON.parse(storedData));
    } else {
      const initData = [
        {
          id: "1",
          name: "Alexandra Lee",
          major: "Computer Science",
          contact: "alexandra.lee@example.com",
          avatar: `http://liangge.nihe.cc/image/0.webp`,
          phoneNumber: "(212) 555-1234",
          destinationCity: "New York",
          companyName: "Tech Innovators Inc.",
          companyLongitude: -74.006,
          companyLatitude: 40.7128,
        },
        {
          id: "2",
          name: "Brian Chen",
          major: "Information Science",
          contact: "brian.chen@example.com",
          avatar: `http://liangge.nihe.cc/image/1.webp`,
          phoneNumber: "(415) 555-5678",
          destinationCity: "San Francisco",
          companyName: "Digital Dreams Co.",
          companyLongitude: -122.4194,
          companyLatitude: 37.7749,
        },
        {
          id: "3",
          name: "Caroline Smith",
          major: "Electrical and Computer Engineering",
          contact: "caroline.smith@example.com",
          avatar: `http://liangge.nihe.cc/image/2.webp`,
          phoneNumber: "(206) 555-9012",
          destinationCity: "Seattle",
          companyName: "InnovateNow LLC",
          companyLongitude: -122.3321,
          companyLatitude: 47.6062,
        },
        {
          id: "4",
          name: "David Kim",
          major: "Business and Technology",
          contact: "david.kim@example.com",
          avatar: `http://liangge.nihe.cc/image/3.webp`,
          phoneNumber: "(617) 555-3456",
          destinationCity: "Boston",
          companyName: "Fintech Futures",
          companyLongitude: -71.0589,
          companyLatitude: 42.3601,
        },
        {
          id: "5",
          name: "Emily Wong",
          major: "Data Science",
          contact: "emily.wong@example.com",
          avatar: `http://liangge.nihe.cc/image/4.webp`,
          phoneNumber: "(512) 555-7890",
          destinationCity: "Austin",
          companyName: "Data Dynamics",
          companyLongitude: -97.7431,
          companyLatitude: 30.2672,
        },
        {
          id: "6",
          name: "Franklin Patel",
          major: "Mechanical Engineering",
          contact: "franklin.patel@example.com",
          avatar: `http://liangge.nihe.cc/image/5.webp`,
          phoneNumber: "(312) 555-2345",
          destinationCity: "Chicago",
          companyName: "Engineering Marvels Corp.",
          companyLongitude: -87.6298,
          companyLatitude: 41.8781,
        },
        {
          id: "7",
          name: "Grace Davis",
          major: "Environmental Engineering",
          contact: "grace.davis@example.com",
          avatar: `http://liangge.nihe.cc/image/6.webp`,
          phoneNumber: "(303) 555-4567",
          destinationCity: "Denver",
          companyName: "EcoSolutions",
          companyLongitude: -104.9903,
          companyLatitude: 39.7392,
        },
        {
          id: "8",
          name: "Henry Zhang",
          major: "Material Science",
          contact: "henry.zhang@example.com",
          avatar: `http://liangge.nihe.cc/image/7.webp`,
          phoneNumber: "(412) 555-6789",
          destinationCity: "Pittsburgh",
          companyName: "Materials Research Group",
          companyLongitude: -79.9959,
          companyLatitude: 40.4406,
        },
        {
          id: "9",
          name: "Isabella Martinez",
          major: "Biomedical Engineering",
          contact: "isabella.martinez@example.com",
          avatar: `http://liangge.nihe.cc/image/8.webp`,
          phoneNumber: "(619) 555-1011",
          destinationCity: "San Diego",
          companyName: "BioMedTech",
          companyLongitude: -117.1611,
          companyLatitude: 32.7157,
        },
        {
          id: "10",
          name: "Jackie Nguyen",
          major: "Operations Research",
          contact: "jackie.nguyen@example.com",
          avatar: `http://liangge.nihe.cc/image/9.webp`,
          phoneNumber: "(404) 555-2323",
          destinationCity: "Atlanta",
          companyName: "Optimal Operations",
          companyLongitude: -84.388,
          companyLatitude: 33.749,
        },
      ];
      localStorage.setItem("cornellTechGraduates", JSON.stringify(initData));
      setCornellTechGraduates(initData);
    }
  }, []);
  const initializeMap = () => {
    map = new BMap.Map(mapContainerRef.current);
    const point = new BMap.Point(center.longitude, center.latitude);
    map.centerAndZoom(point, zoom);
    var navigationControl = new BMap.NavigationControl();
    map.addControl(navigationControl);
    map.enableScrollWheelZoom();

    function MyCustomOverlay(point, imageUrl, data) {
      this._point = point;
      this._imageUrl = imageUrl;
      this._userData = data;
      BMap.Overlay.call(this);
    }

    MyCustomOverlay.prototype = new BMap.Overlay();
    MyCustomOverlay.prototype.initialize = function (map) {
      var div = document.createElement("div");
      div.style.position = "absolute";
      var img = document.createElement("img");
      img.src = this._imageUrl;
      img.style.width = "48px";
      img.style.height = "48px";
      img.style.border = "2px solid #fff";
      img.style.borderRadius = "50%";
      img.className = "animate__animated animate__bounceIn";
      img.addEventListener("click", (e) => {
        console.log(this._userData);
        const modal = document.getElementById("myModal");
        const avatar = document.querySelector(".avatar");
        const name = document.querySelector(".profile-name");
        const major = document.querySelector(".major");
        const contact = document.querySelector(".contact");
        const phoneNumber = document.querySelector(".phone-number");
        const destinationCity = document.querySelector(".destination-city");
        const companyName = document.querySelector(".company-name");

        // 填充数据
        avatar.src = this._userData.avatar; // 假设avatar字段是图片URL
        name.textContent = this._userData.name;
        major.textContent = `Major: ${this._userData.major}`;
        contact.textContent = `Contact: ${this._userData.contact}`;
        phoneNumber.textContent = `Phone Number: ${this._userData.phoneNumber}`;
        destinationCity.textContent = `Destination City: ${this._userData.destinationCity}`;
        companyName.textContent = `Company Name: ${this._userData.companyName}`;

        modal.style.display = "block";

        // 添加点击事件监听器以在点击关闭按钮时隐藏模态对话框
        const span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
          modal.style.display = "none";
        };

        // 当用户点击模态对话框以外的地方时也关闭它
        window.onclick = function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        };
      });
      div.appendChild(img);
      map.getPanes().markerPane.appendChild(div);
      this._div = div;
      return div;
    };

    MyCustomOverlay.prototype.draw = function () {
      var pixel = map.pointToOverlayPixel(this._point);
      this._div.style.left = pixel.x - 32 + "px";
      this._div.style.top = pixel.y - 32 + "px";
    };

    cornellTechGraduates.forEach((item, index) => {
      var point = new BMap.Point(item.companyLongitude, item.companyLatitude);
      var overlay = new MyCustomOverlay(point, item.avatar, item);
      map.addOverlay(overlay);
    });
  };

  useEffect(() => {
    if (mapContainerRef.current) {
      initializeMap();
    }
  });

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "100vh", margin: "0 auto" }}
      />
      <div id="myModal" className="modal animate__animated animate__fadeIn">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="profile-card">
            <img className="avatar" src="" alt="Avatar" />
            <div className="profile-info">
              <h3 className="profile-name"> </h3>
              <p className="major"></p>
              <p className="contact"></p>
              <p className="phone-number"></p>
              <p className="destination-city"></p>
              <p className="company-name"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiduMap;
