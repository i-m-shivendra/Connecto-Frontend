
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/profile.css";
import {
  FaUser,
  FaHome,
  FaUserFriends,
  FaPlus,
  FaPen
} from "react-icons/fa";

import profilePhoto from "../../assets/images/Sachin.jpg";

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" style={{ flex: "1" }}>
            Connecto
          </a>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ flex: "2" }}
          >
            <a className="nav-link" href="/home" style={{ margin: "0 100px" }}>
              <FaHome />
            </a>
            <a
              className="nav-link"
              href="/friends"
              style={{ margin: "0 100px" }}
            >
              <FaUserFriends />
            </a>
          </div>
          <div className="d-flex justify-content-end" style={{ flex: "1" }}>
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/profile")}
            >
              <FaUser />
            </button>
          </div>
        </div>
      </nav>

      <div className="container profile-content">
        <div className="profile-card">
          <div className="profile-header text-center">
            <div className="profile-photo">
              <img
                src={profilePhoto}
                alt="Profile"
                className="rounded-circle"
              />
            </div>
            <h2 className="profile-name">Sachin Tendulkar</h2>
            <p className="friend-count">20000 friends</p>

            <div className="profile-buttons d-flex justify-content-center">
              <button
                className="btn btn-primary mx-2"
                onClick={() => navigate("/friends")}
              >
                <FaPlus /> Add Friend
              </button>

              <button
                className="btn btn-primary mx-2"
                onClick={() => navigate("/edit-profile")}
              >
                <FaPen /> Edit Profile
              </button>

              <button 
                className="btn btn-primary mx-2"
                onClick={ () => navigate("/create-post")}
              >
                <FaPlus/>
              </button>

            </div>

            <hr className="bold-line my-4" />

            <div className="profile-navigation d-flex justify-content-center">
              <button 
               className="btn btn-light mx-2"
               onClick={() => navigate("/posts")}>
                Posts
               </button>


              <button className="btn btn-light mx-2">Photos</button>
              <button className="btn btn-light mx-2">Videos</button>
            </div>

            <hr className="bold-line my-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
