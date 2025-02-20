import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/updatepost.css";
import {
  FaHome,
  FaUserFriends,
  FaCompass,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { Card, Button } from 'react-bootstrap';

const UpdatePost: React.FC = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Content:", content);
    if (image) {
      console.log("Image:", image.name);
    }
  };

  return (
    <div className="update-post-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ zIndex: 1000 }}>
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

      <div className="update-post-body">
        <Card className="update-post-card">
          <Card.Body>
            <h3 className="section-title">Update Your Post</h3>
            <form className="update-post-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="postContent">Content</label>
                <textarea
                  id="postContent"
                  className="form-control"
                  rows={4}
                  value={content}
                  onChange={handleContentChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="postImage">File</label>
                <input
                  type="file"
                  id="postImage"
                  className="form-control-file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {image && (
                <div className="image-preview">
                  <img src={URL.createObjectURL(image)} alt="Preview" />
                </div>
              )}
              <Button type="submit" variant="primary">Update Post</Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UpdatePost;
