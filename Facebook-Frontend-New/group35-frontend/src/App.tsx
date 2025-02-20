
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Components/Auth/Login"
import Register from "./Components/Auth/Register"
import ForgottenPassword from "./Components/Auth/ForgottenPassword"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Homes/Home";
import Profile from "./Components/Profiles/Profile"
import Friends from "./Components/Friends/Friends";
import AllFriends from "./Components/Friends/AllFriends";
import FriendRequests from "./Components/Friends/FriendRequests";
import FriendRequestsConfirmed from "./Components/Friends/FriendRequestConfirmed";
import EditProfilePage from "./Components/Profiles/EditProfile";
import UserPosts from "./Components/Profiles/UserPosts";
import SharePage from "./Components/Profiles/Share";
import CreatePost from "./Components/Profiles/CreatePost";
import FriendProfile from "./Components/Friends/FriendProfile";
import UpdatePost from "./Components/Profiles/UpdatePost";
import Feed from "./Components/Homes/Feed";

function App() {
  
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/all-friends" element={<AllFriends/>}/>
          <Route path="/friend-requests" element={<FriendRequests/>}/>
          <Route path="/friend-requests-confirmed" element={<FriendRequestsConfirmed/>}/>
          <Route path="/edit-profile" element={<EditProfilePage/>}/>
          <Route path="/posts" element={<UserPosts/>}/>
          <Route path="/share" element={<SharePage/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/friend-profile/:friendId" element={<FriendProfile/>}/>
          <Route path="/update-post/:postId" element={<UpdatePost/>}/>
          <Route path="/feed" element={<Feed/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
