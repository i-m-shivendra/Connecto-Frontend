import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/friendrequests.css';
import { FaHome, FaUser, FaUserFriends, FaSearch, FaUserPlus, FaUsers } from "react-icons/fa";
import { Card, Button } from 'react-bootstrap'; // Import Card and Button from react-bootstrap
import pontingImage from "../../assets/images/Ponting.jpg";
import pollackImage from "../../assets/images/Pollack.jpg";
import yuvrajImage from "../../assets/images/Yuvraj.jpg";

interface FriendRequest { 
  id: number; 
  name: string; 
  image: string; 
}

function FriendRequests() {
  const navigate = useNavigate();

  
  const initialRequests = [
    { id: 1, name: 'Ricky Ponting', image: pontingImage },
    { id: 2, name: 'Shaun Pollack', image: pollackImage },
    { id: 3, name: 'Yuvraj Singh', image: yuvrajImage }
  ];

// State to manage friend requests and confirmed friends 
const [friendRequests, setFriendRequests] = useState<FriendRequest[]>(initialRequests); 
const [confirmedFriends, setConfirmedFriends] = useState<FriendRequest[]>([]);

const confirmFriend = (id: number) => { 
  const confirmedFriend = friendRequests.find(request => request.id === id); 
  if (confirmedFriend) { 
    setConfirmedFriends([...confirmedFriends, confirmedFriend]); 
    navigate('/friend-requests-confirmed', 
    { state: { confirmedFriends: [...confirmedFriends, confirmedFriend] } } 
   ); 
  } 
};

  return (
    <div className="friend-requests-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" style={{ flex: '1' }}>Connecto</a>
          <div className="d-flex justify-content-center align-items-center" style={{ flex: '2' }}>
            <a className="nav-link" href="/home" style={{ margin: "0 100px" }}>
              <FaHome />
            </a>
            <a className="nav-link" href="/friends" style={{ margin: "0 100px" }}>
              <FaUserFriends />
            </a>
          </div>
          <div className="d-flex justify-content-end" style={{ flex: '1' }}>
            <button className="btn btn-outline-primary" onClick={() => navigate('/profile')}>
              <FaUser />
            </button>
          </div>
        </div>
      </nav>

      <div className="sidebar">
        <h3 className="font-weight-bold">Friends</h3>
        <ul>
          <li>
            <a href="/friends"
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <FaSearch /> Find new Friends </a>
          </li>

          <li>
            <a href="/friend-requests"
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <FaUserPlus /> Friend Requests</a>
          </li>

          <li>
            <a href="/all-friends" 
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <FaUsers /> All Friends</a>
          </li>

        </ul>
      </div>

      <div className="friend-requests-body">
        <h3 className="section-title">Friend Request ({friendRequests.length})</h3>
        <div className="friend-requests-list">
          {friendRequests.map(request => (
            <Card className="friend-request-card" key={request.id}>
              <Card.Img variant="top" src={request.image} alt={request.name} />
              <Card.Body>
                <Card.Title>{request.name}</Card.Title>
                
                <Button 
                variant="primary" 
                className="confirm-btn"
                onClick={() => confirmFriend(request.id)}>
                Confirm
                </Button>

                <Button variant="secondary" 
                className="delete-btn">Delete

                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendRequests;
