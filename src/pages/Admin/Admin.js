import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Admin = () => {
  const navigate = useNavigate();

  const [cornellTechGraduates, setCornellTechGraduates] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
  };

  useEffect(() => {
    // 判断isLogin状态
    const isLogin = localStorage.getItem("isLogin") === "true";
    if (!isLogin) {
      navigate("/login"); // 如果未登录，跳转至登录页面
      return; // 确保后续代码不执行
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

  const handleEdit = (graduate) => {
    console.log(`Editing: ${graduate.name}`);
    // 实现编辑逻辑
    navigate(`/edit/${graduate.id}`, { state: { graduate } });
  };

  const handleDelete = (graduate) => {
    // 实现删除逻辑
    const newData = [...cornellTechGraduates];
    const index = newData.findIndex((g) => g.id === graduate.id);
    newData.splice(index, 1);
    setCornellTechGraduates(newData);
    localStorage.setItem("cornellTechGraduates", JSON.stringify(newData));
  };

  return (
    <div className="main-box">
      <div className="title-box">
        <a href="/">&larr; Back</a>
        <div className="title">Cornell Tech Graduates</div>
        <div></div>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search" onChange={handleSearchChange} />
        <button className="add-btn" onClick={() => navigate("/add")}>
          Add
        </button>
      </div>
      <table className="graduates-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Major</th>
            <th>Contact</th>
            <th>PhoneNumber</th>
            <th>DestinationCity</th>
            <th>CompanyName</th>
            <th>CompanyPosition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cornellTechGraduates
            .filter((graduate) =>
              graduate.name.toLowerCase().includes(searchValue)
            )
            .map((graduate, index) => (
              <tr key={index}>
                <td>
                  <img
                    className="avatar"
                    src={graduate.avatar}
                    alt={graduate.name}
                  />
                </td>
                <td>{graduate.name}</td>
                <td>{graduate.major}</td>
                <td>{graduate.contact}</td>
                <td>{graduate.phoneNumber}</td>
                <td>{graduate.destinationCity}</td>
                <td>{graduate.companyName}</td>
                <td>
                  {graduate.companyLongitude},{graduate.companyLatitude}
                </td>
                <td>
                  <div className="ctrl-col">
                    <button onClick={() => handleEdit(graduate)}>Edit</button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(graduate)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
