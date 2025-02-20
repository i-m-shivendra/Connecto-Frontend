import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/allfriends.css";
import {
  FaHome,
  FaUser,
  FaUserFriends,
  FaSearch,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { Card, Button } from "react-bootstrap"; 
import broadImage from "../../assets/images/Broad.jpg";
import andersonImage from "../../assets/images/James Anderson.jpg";
import rohitImage from "../../assets/images/Rohit.jpg";
import yuvrajImage from "../../assets/images/Yuvraj.jpg";

function AllFriends() {
  const navigate = useNavigate();

  const friendsData = [
    { id: 5, name: "Stuart Broad", image: broadImage },
    { id: 6, name: "James Anderson", image: andersonImage },
    { id: 7, name: "Rohit Sharma", image: rohitImage },
    { id: 8, name: "Yuvraj Singh", image: yuvrajImage },
  ];

  const [friends, setFriends] = useState(friendsData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleUnfriend = (id: any) => {
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, isUnfriended: true } : friend
      )
    );
  };

  const handleAddFriend = (id: any) => {
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, isUnfriended: false } : friend
      )
    );
  };

  // Filter friends based on search query
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="all-friends-container">
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

      <div className="all-friends-body">
        <h3 className="section-title">All Friends</h3>

        <div className="search-container">
          <FaSearch
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          />
          <input
            type="text"
            className="search-bar"
            placeholder="Search Friends"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <h4 className="friend-count">
          {filteredFriends.length} Friend{filteredFriends.length !== 1 && "s"}
        </h4>
        <div className="friend-list">
          {filteredFriends.map((friend) => (
            <Card className="friend-card" key={friend.id}>
              <Card.Img variant="top" src={friend.image} alt={friend.name} />
              <Card.Body>
                <Card.Title>{friend.name}</Card.Title>
                {!friend.isUnfriended ? (
                  <>
                    <Button
                      variant="success"
                      className="view-profile-btn"
                      onClick={() => navigate(`/friend-profile/${friend.id}`)}
                    >
                      View Profile
                    </Button>

                    <Button
                      variant="secondary"
                      className="unfriend-btn"
                      onClick={() => handleUnfriend(friend.id)}
                    >
                      Unfriend
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="not-friends-text">You are not friends now</p>
                    <Button
                      variant="primary"
                      className="add-friend-btn"
                      onClick={() => handleAddFriend(friend.id)}
                    >
                      Add Friend
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

export default AllFriends;
