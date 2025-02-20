import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/friends.css';
import { FaHome, FaUser, FaUserFriends, FaSearch, FaUserPlus, FaUsers } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import sachinImage from '../../assets/images/Sachin.jpg';
import viratImage from '../../assets/images/Virat.jpg';
import pontingImage from '../../assets/images/Ponting.jpg';
import pollackImage from '../../assets/images/Pollack.jpg';
import broadImage from '../../assets/images/Broad.jpg';
import andersonImage from '../../assets/images/James Anderson.jpg';
import rohitImage from '../../assets/images/Rohit.jpg';
import yuvrajImage from '../../assets/images/Yuvraj.jpg';

function Friends() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Sachin Tendulkar', image: sachinImage, isRequested: false },
    { id: 2, name: 'Virat Kohli', image: viratImage, isRequested: false },
    { id: 3, name: 'Ricky Ponting', image: pontingImage, isRequested: false },
    { id: 4, name: 'Shaun Pollock', image: pollackImage, isRequested: false },
    { id: 5, name: 'Stuart Broad', image: broadImage, isRequested: false },
    { id: 6, name: 'James Anderson', image: andersonImage, isRequested: false },
    { id: 7, name: 'Rohit Sharma', image: rohitImage, isRequested: false },
    { id: 8, name: 'Yuvraj Singh', image: yuvrajImage, isRequested: false },
  ]);

  const handleAddFriend = (id:any) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, isRequested: true } : profile
    ));
  };

  const handleCancelRequest = (id:any) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, isRequested: false } : profile
    ));
  };

  return (
    <div className="friends-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" style={{ flex: '1' }}>
            Connecto
          </a>
          <div className="d-flex justify-content-center align-items-center" style={{ flex: '2' }}>
            <a className="nav-link" href="/home" style={{ margin: '0 100px' }}>
              <FaHome />
            </a>
            <a className="nav-link" href="/friends" style={{ margin: '0 100px' }}>
              <FaUserFriends />
            </a>
          </div>
          <div className="d-flex justify-content-end" style={{ flex: '1' }}>
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate('/profile')}
            >
              <FaUser />
            </button>
          </div>
          <button className="btn btn-outline-secondary d-lg-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            Toggle Sidebar
          </button>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
        <h3 className="font-weight-bold">Friends</h3>
        <ul>
          <li>
            <a href="/friends" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaSearch /> Find new Friends
            </a>
          </li>
          <li>
            <a href="/friend-requests" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaUserPlus /> Friend Requests
            </a>
          </li>
          <li>
            <a href="/all-friends" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaUsers /> All Friends
            </a>
          </li>
        </ul>
      </div>

      <div className="friends-body">
        <h3 className="section-title">People you may know</h3>
        <div className="friend-list">
          {profiles.map((profile) => (
            <Card className="friend-card" key={profile.id}>
              <Card.Img variant="top" src={profile.image} alt={profile.name} />
              <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                {!profile.isRequested ? (
                  <Button
                    variant="primary"
                    className="add-friend-btn"
                    onClick={() => handleAddFriend(profile.id)}
                  >
                    Add Friend
                  </Button>
                ) : (
                  <>
                    <p className="request-sent-text">Your request has been sent</p>
                    <Button
                      variant="danger"
                      className="cancel-request-btn"
                      onClick={() => handleCancelRequest(profile.id)}
                    >
                      Cancel Request
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;
