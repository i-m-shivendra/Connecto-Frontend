import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/share.css/";
import { FaWhatsapp, FaTelegram, FaSnapchat, FaTwitter, FaLinkedin, FaHome, FaUserFriends, FaUser, FaCompass, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SharePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="share-page-container">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        style={{ zIndex: 1000 }}
      >
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
        <h2 className="font-weight-bold">Connecto</h2>
        <ul>
          <li>
            <a href="/home">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="/posts">
              <FaCompass /> Explore
            </a>
          </li>
          <li>
            <a href="/liked">
              <FaHeart /> Liked Posts
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaUser /> Profile
            </a>
          </li>
        </ul>
      </div>

      <div className="share-body">
        <h3 className="share-title">Share With</h3>
        <div className="share-card">
          <div className="share-option">
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="fa-whatsapp" />
              <span className="share-text">Whatsapp</span>
            </a>
          </div>
          <div className="share-option">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="fa-telegram" />
              <span className="share-text">Telegram</span>
            </a>
          </div>
          <div className="share-option">
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
              <FaSnapchat className="fa-snapchat" />
              <span className="share-text">Snapchat</span>
            </a>
          </div>
          <div className="share-option">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="fa-twitter" />
              <span className="share-text">Twitter</span>
            </a>
          </div>
          <div className="share-option">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="fa-linkedin" />
              <span className="share-text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage;
