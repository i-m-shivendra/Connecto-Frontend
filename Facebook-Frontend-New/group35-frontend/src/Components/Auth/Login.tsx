import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ emailOrPhone?: string; password?: string }>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { emailOrPhone?: string; password?: string } = {};
    if (!emailOrPhone) newErrors.emailOrPhone = "Email or phone number is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("/api/users/login", { emailOrPhone, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-brand">
        <h1>Connecto</h1>
        <p>Weaving the world together</p>
      </div>
      <div className="login-box">
        <h3>Log in to Connecto</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email address or phone number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          {errors.emailOrPhone && <p className="error">{errors.emailOrPhone}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit" className="login-button">Log in</button>
        </form>
        <hr />
        <button className="btn btn-link text-primary" onClick={() => navigate('/forgotten-password')}>Forgotten password?</button>
        <div className="separator">
          <span>or</span>
        </div>
        <button className="create-account-button" onClick={() => navigate('/register')}>Create new account</button> {/* Added the onClick */}
      </div>
    </div>
  );
}

export default Login;
