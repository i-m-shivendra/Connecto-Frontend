import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/userposts.css";
import profilePhoto from "../../assets/images/Sachin.jpg";
import fisrtImage from "../../assets/selfpostimages/image1.jpg";
import secondImage from "../../assets/selfpostimages/image2.jpg";
import thirdImage from "../../assets/selfpostimages/image3.jpg";
import fourthImage from "../../assets/selfpostimages/image4.jpg";
import fifthImage from "../../assets/selfpostimages/image5.jpg";
import sixthImage from "../../assets/selfpostimages/image6.jpg";
import seventhImage from "../../assets/selfpostimages/image7.jpg";
import eighthImage from "../../assets/selfpostimages/image8.jpg";
import ninthImage from "../../assets/selfpostimages/image9.jpg";

import {
  FaHome,
  FaUser,
  FaUserFriends,
  FaCompass,
  FaHeart,
  FaPaperPlane,
  FaShare,
  FaThumbsUp,
  FaPen,
  FaTrashAlt,
} from "react-icons/fa";

interface Post {
  id: number;
  username: string;
  content: string;
  likes: number;
  images: string[];
  comments: Comment[];
}

interface Comment {
  text: string;
  date: string;
}

const UserPosts: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      username: "Sachin Tendulkar",
      content:
        "There is nothing more beautiful than enjoying the nature at your fullest potential",
      likes: 44,
      images: [fisrtImage],
      comments: [],
    },
    {
      id: 2,
      username: "Sachin Tendulkar",
      content:
        "The only way to do great work is to love what you do and what you wants to do",
      likes: 25,
      images: [secondImage],
      comments: [],
    },

    {
      id: 3,
      username: "Sachin Tendulkar",
      content:
        "Believe you can and you’re halfway there. Just Chase yor dreams and work hard and be consistent",
      likes: 1,
      images: [thirdImage],
      comments: [],
    },

    {
      id: 4,
      username: "Sachin Tendulkar",
      content:
        "Your time is limited, don’t waste it living someone else’s life Give your best and achieve success",
      likes: 256,
      images: [fourthImage],
      comments: [],
    },

    {
      id: 5,
      username: "Sachin Tendulkar",
      content:
        "Success is not final, failure is not fatal: It is the courage to continue that counts your each and every effort",
      likes: 23,
      images: [fifthImage],
      comments: [],
    },

    {
      id: 6,
      username: "Sachin Tendulkar",
      content:
        "The future belongs to those who believe in the beauty of their dreams and workd hard",
      likes: 90,
      images: [sixthImage],
      comments: [],
    },

    {
      id: 7,
      username: "Sachin Tendulkar",
      content:
        "In three words I can sum up everything I’ve learned about life: it goes on, it goes on and it goes on",
      likes: 101,
      images: [seventhImage],
      comments: [],
    },

    {
      id: 8,
      username: "Sachin Tendulkar",
      content:
        "The only limit to our realization of tomorrow will be our doubts of today that is going on",
      likes: 3487,
      images: [eighthImage],
      comments: [],
    },

    {
      id: 9,
      username: "Sachin Tendulkar",
      content:
        "You are never too old to set another goal or to dream a new dream but work hard and be consistent",
      likes: 289,
      images: [ninthImage],
      comments: [],
    },

    {
      id: 10,
      username: "Sachin Tendulkar",
      content:
        "Success usually comes to those who are too busy to be looking for it and mut be doing hard work for it",
      likes: 5,
      images: [sixthImage],
      comments: [],
    },
  ]);
  const [page, setPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});

  const postsPerPage = 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: likedPosts[postId] ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleCommentChange = (postId: number, value: string) => {
    setNewComment((prev) => ({ ...prev, [postId]: value }));
  };

  const addComment = (postId: number) => {
    if (newComment[postId]) {
      const comment = {
        text: newComment[postId],
        date: new Date().toLocaleString(),
      };
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, comment] }
            : post
        )
      );
      setNewComment((prev) => ({ ...prev, [postId]: "" }));
    }
  };

  const handleDelete = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="user-posts-container">
      {" "}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        style={{ zIndex: 1000 }}
      >
        {" "}
        <div className="container-fluid">
          {" "}
          <a className="navbar-brand" href="/home" style={{ flex: "1" }}>
            {" "}
            Connecto{" "}
          </a>{" "}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ flex: "2" }}
          >
            {" "}
            <a className="nav-link" href="/home" style={{ margin: "0 100px" }}>
              {" "}
              <FaHome />{" "}
            </a>{" "}
            <a
              className="nav-link"
              href="/friends"
              style={{ margin: "0 100px" }}
            >
              {" "}
              <FaUserFriends />{" "}
            </a>{" "}
          </div>{" "}
          <div className="d-flex justify-content-end" style={{ flex: "1" }}>
            {" "}
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/profile")}
            >
              {" "}
              <FaUser />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
      <div className="sidebar">
        {" "}
        <h2 className="font-weight-bold">Connecto</h2>{" "}
        <ul>
          {" "}
          <li>
            {" "}
            <a href="/home">
              {" "}
              <FaHome /> Home{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="/posts">
              {" "}
              <FaCompass /> Explore{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="/liked">
              {" "}
              <FaHeart /> Liked Posts{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="/profile">
              {" "}
              <FaUser /> Profile{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div className="posts-body">
        {" "}
        <h3 className="section-title" style={{ marginTop: "80px" }}>
          {" "}
          See your Posts{" "}
        </h3>{" "}
        <div className="post-list">
          {" "}
          {currentPosts.map((post) => (
            <div className="post-card" key={post.id}>
              {" "}
              <div className="post-header">
                {" "}
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="profile-picture"
                />{" "}
                <h4>{post.username}</h4>{" "}
                <button
                  className="update-post-button"
                  onClick={() => navigate(`/update-post/${post.id}`)}
                >
                  {" "}
                  <FaPen />{" "}
                </button>{" "}

                <button
                  className="delete-post-button"
                  onClick={() => handleDelete(post.id)}
                >
                {" "}
                <FaTrashAlt />{" "}
                </button>
                
              </div>{" "}
              <div className="post-content">
                {" "}
                <p>{post.content}</p>{" "}
                <div className="post-image">
                  {" "}
                  <img src={post.images[0]} alt="Post" />{" "}
                </div>{" "}
                <hr className="separator" />{" "}
                <div className="post-actions">
                  {" "}
                  <button
                    className={`like-button ${
                      likedPosts[post.id] ? "liked" : ""
                    }`}
                    onClick={() => toggleLike(post.id)}
                  >
                    {" "}
                    <FaThumbsUp />{" "}
                    <span className="like-text">
                      {" "}
                      {likedPosts[post.id]
                        ? `You and ${post.likes} others`
                        : `${post.likes} Likes`}{" "}
                    </span>{" "}
                  </button>{" "}
                  <div className="comment-section">
                    {" "}
                    <div className="comments">
                      {" "}
                      {post.comments.map((comment, index) => (
                        <div key={index} className="comment">
                          {" "}
                          <span className="comment-text">
                            {comment.text}
                          </span>{" "}
                          <span className="comment-date">{comment.date}</span>{" "}
                        </div>
                      ))}{" "}
                      <input
                        type="text"
                        className="comment-input"
                        placeholder="Add a comment..."
                        value={newComment[post.id] || ""}
                        onChange={(e) =>
                          handleCommentChange(post.id, e.target.value)
                        }
                      />{" "}
                      <button
                        className="send-comment-button"
                        onClick={() => addComment(post.id)}
                      >
                        {" "}
                        <FaPaperPlane />{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                  <button
                    className="share-button"
                    onClick={() => navigate("/share")}
                  >
                    {" "}
                    <FaShare /> <span className="share-text">Share</span>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <div className="pagination">
          {" "}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`page-button ${page === index + 1 ? "active" : ""}`}
              onClick={() => setPage(index + 1)}
            >
              {" "}
              {index + 1}{" "}
            </button>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default UserPosts;
