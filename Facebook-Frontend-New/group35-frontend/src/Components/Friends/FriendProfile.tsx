
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/friendprofile.css';
import { FaHome, FaUser, FaUserFriends, FaSearch, FaUserPlus, FaUsers } from 'react-icons/fa';

import broadImage from "../../assets/images/Broad.jpg";
import andersonImage from "../../assets/images/James Anderson.jpg";
import rohitImage from "../../assets/images/Rohit.jpg";
import yuvrajImage from "../../assets/images/Yuvraj.jpg";
import { Card, Button } from 'react-bootstrap'; // Import Card and Button from react-bootstrap

function FriendProfile() {
  const { friendId } = useParams();
  const navigate = useNavigate();

  // Dummy data for demonstration purposes
  const friendsData = [
    { id: 5, name: 'Stuart Broad', image: broadImage, friendsCount: 370 },
    { id: 6, name: 'James Anderson', image: andersonImage, friendsCount: 290 },
    { id: 7, name: 'Rohit Sharma', image: rohitImage, friendsCount: 969 },
    { id: 8, name: 'Yuvraj Singh', image: yuvrajImage, friendsCount: 1550 },
  ];

  const friend = friendsData.find(f => f.id === parseInt(friendId));

  if (!friend) {
    return <div>Friend not found</div>;
  }

  return (
    <div className="friend-profile-container">
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

      <div className="sidebar">
        <h3 className="font-weight-bold">Friends</h3>
        <ul>
          <li>
            <a
              href="/friends"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaSearch /> Find new Friends
            </a>
          </li>
          <li>
            <a
              href="/friend-requests"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaUserPlus /> Friend Requests
            </a>
          </li>
          <li>
            <a
              href="/all-friends"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaUsers /> All Friends
            </a>
          </li>
        </ul>
      </div>

      <div className="friend-profile-body">
        <Card className="profile-card">
          <Card.Body>
            <div className="profile-header">
              <img src={friend.image} alt={friend.name} className="profile-image" />
              <h2>{friend.name}</h2>
              <p>{friend.friendsCount} friends</p>
              <div className="profile-actions">
                <Button variant="primary">Add Friend</Button>
                <Button variant="secondary">Edit Profile</Button>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-tabs">
                <Button variant="link" className="tab-button">Posts</Button>
                <Button variant="link" className="tab-button">Photos</Button>
                <Button variant="link" className="tab-button">Videos</Button>
              </div>
              <div className="tab-content">
                {/* Content for each tab can be added here */}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FriendProfile;
