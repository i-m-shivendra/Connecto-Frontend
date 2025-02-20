import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/editprofile.css";
import { FaHome, FaUser, FaUserFriends } from 'react-icons/fa';

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  relationshipStatus: string;
}

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "",
    relationshipStatus: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Details saved:", details);
    navigate("/profile");
  };

  return (
    <div className="edit-profile-page">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" style={{ flex: "1" }}>
            Connecto
          </a>
          <div className="d-flex justify-content-center align-items-center" style={{ flex: "2" }}>
            <a className="nav-link" href="/home" style={{ margin: "0 100px" }}>
              <FaHome />
            </a>
            <a className="nav-link" href="/friends" style={{ margin: "0 100px" }}>
              <FaUserFriends />
            </a>
          </div>
          <div className="d-flex justify-content-end" style={{ flex: "1" }}>
            <button className="btn btn-outline-primary" onClick={() => navigate("/profile")}>
              <FaUser />
            </button>
          </div>
        </div>
      </nav>

      <div className="container edit-profile-content">
        <div className="card edit-profile-card">
          <h3 className="card-title text-center">Edit Profile</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Edit your first name"
                value={details.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Edit your last name"
                value={details.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Edit your email address"
                value={details.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                name="mobile"
                placeholder="Edit your mobile number"
                value={details.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="Change your city"
                value={details.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="gender"
                value={details.gender}
                onChange={handleChange}
              >
                <option value="" disabled>Change your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="relationshipStatus"
                value={details.relationshipStatus}
                onChange={handleChange}
              >
                <option value="" disabled>Change your relationship status</option>
                <option value="single">Single</option>
                <option value="in a relationship">In a Relationship</option>
                <option value="married">Married</option>
                <option value="complicated">It's Complicated</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Confirm & Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
