// Add.js
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { nanoid } from "nanoid";
const Add = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialGraduate = location.state?.graduate || {};
  const [graduate, setGraduate] = useState(initialGraduate);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarBase64, setAvatarBase64] = useState(null);

  const handleChange = (e) => {
    if (e.target.id === "avatar") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAvatarPreview(reader.result);
          setAvatarBase64(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setGraduate({ ...graduate, [e.target.id]: e.target.value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = JSON.parse(localStorage.getItem("cornellTechGraduates"));
    const id = nanoid();
    graduate.id = id;
    graduate.avatar = avatarBase64;
    data.push(graduate);
    localStorage.setItem("cornellTechGraduates", JSON.stringify(data));
    alert("Add Success!");
    navigate(-1);
  };
  return (
    <div className="main-box">
      <h2>Add Graduate</h2>
      {graduate && (
        <form className="Add-form" onSubmit={handleSubmit}>
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
            <div className="grid-item avatar-group">
              <label htmlFor="avatar">Avatar:</label>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleChange}
                required
              />
              {avatarPreview && (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  style={{ maxWidth: "200px" }}
                />
              )}
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
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Add;
