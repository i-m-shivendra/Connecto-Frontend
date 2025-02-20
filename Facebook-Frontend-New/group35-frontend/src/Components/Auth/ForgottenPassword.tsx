import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/forgottenPassword.css'; 

function ForgottenPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) newErrors.email = "Email is required";
    if (!newPassword) newErrors.newPassword = "New password is required";
    if (newPassword.length < 8) newErrors.newPassword = "Password must be at least 8 characters long";
    if (newPassword !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("/api/users/reset-password", { email, newPassword });
      alert("Password reset successful! Please log in.");
      navigate("/");
    } catch (err) {
      alert("Password reset failed!");
    }
  };

  return (
    <div className="reset-password-container">
      <h3 className="text-center font-weight-bold">Reset Your Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Set New Password</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Set new password"
          />
          {errors.newPassword && <p className="text-danger">{errors.newPassword}</p>}
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
          {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgottenPassword;
