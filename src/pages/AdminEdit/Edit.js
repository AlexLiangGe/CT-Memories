// Edit.js
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./index.css";

const Edit = () => {
  const { graduateId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const initialGraduate = location.state?.graduate || {};
  const [graduate, setGraduate] = useState(initialGraduate);
  const handleChange = (e) => {
    setGraduate({ ...graduate, [e.target.id]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (graduateId) {
      const data = JSON.parse(localStorage.getItem("cornellTechGraduates"));
      const idx = data.findIndex((item) => item.id === graduateId);
      data[idx] = graduate;
      localStorage.setItem("cornellTechGraduates", JSON.stringify(data));
      alert("Edit Success!");
      navigate(-1);
    } else {
      alert("Edit Fail!");
    }
  };
  return (
    <div className="main-box">
      <h2>Edit Graduate</h2>
      {graduate && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="grid-item contact-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                defaultValue={graduate.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid-item contact-group">
              <label htmlFor="major">Major:</label>
              <input
                type="text"
                id="major"
                defaultValue={graduate.major}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid-item contact-group">
              <label htmlFor="contact">Contact:</label>
              <input
                type="text"
                id="contact"
                defaultValue={graduate.contact}
                onChange={handleChange}
                required
              />
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                defaultValue={graduate.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid-item company-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                defaultValue={graduate.companyName}
                onChange={handleChange}
                required
              />
              <label htmlFor="destinationCity">Destination City:</label>
              <input
                type="text"
                id="destinationCity"
                defaultValue={graduate.destinationCity}
                onChange={handleChange}
                required
              />
              <label htmlFor="companyLongitude">Longitude:</label>
              <input
                type="text"
                id="companyLongitude"
                defaultValue={graduate.companyLongitude}
                onChange={handleChange}
                required
              />
              <label htmlFor="companyLatitude">Latitude:</label>
              <input
                type="text"
                id="companyLatitude"
                defaultValue={graduate.companyLatitude}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid-item submit-group">
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Edit;
