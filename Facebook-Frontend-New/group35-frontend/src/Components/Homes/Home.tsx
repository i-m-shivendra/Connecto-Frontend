
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/home.css';
import { FaHome, FaUser, FaUserFriends } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" style={{ flex: '1' }}>
            Connecto
          </a>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ flex: '2' }}
          >
            <a className="nav-link" href="/home" style={{ margin: '0 100px' }}>
              <FaHome />
            </a>
            <a
              className="nav-link"
              href="/friends"
              style={{ margin: '0 100px' }}
            >
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
        </div>
      </nav>

      <div className="home-body text-center">
        <h3 className="font-weight-bold">No posts to show</h3>
        <p>Add more friends to see more photos</p>

        <div className="button-group">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/friends')}
          >
            Find Friends
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/feed')}
          >
            Today's Buzz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
