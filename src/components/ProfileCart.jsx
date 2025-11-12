import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/slices/profileSlice";
import { useNavigate } from "react-router-dom";

const ProfileCart = () => {
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  // Load data from redux or localstorage
  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        bio: profile.bio || "",
      });
    } else if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        bio: "",
      });
    }
  }, [profile, user]);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim()});
  };

  // Handle profile update
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    navigate(0)
    // window.location.reload();
    alert("✅ Profile Updated Successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">My Profile</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Bio</label>
            <textarea
              className="form-control"
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Write something about yourself..."
            />
          </div>

          <button type="submit" 
          className="btn btn-primary w-100">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCart;
