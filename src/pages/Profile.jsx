import React from "react";
import { useSelector } from "react-redux";
import ProfileCart from "../components/ProfileCart";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <p className="text-center mt-10">Loading user data...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 text-center">
        <img
          src={user.profileImage || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          alt="Profile"
          className="rounded-circle mb-3"
          style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #ddd" }}
        />
        <h5>{user.name}</h5>
        <p className="text-muted">{user.email}</p>
        <p className="text-secondary">{user.bio}</p>
      </div>

      <ProfileCart user={user} />
    </div>
  );
};

export default Profile;

