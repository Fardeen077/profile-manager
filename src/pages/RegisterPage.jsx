import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock user registration
        const newUser = {
            ...formData,
            profileImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        };

        dispatch(registerSuccess(newUser));

        localStorage.setItem("user", JSON.stringify(newUser));


        alert("✅ Registration Successful!");
        navigate("/profile");
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
                <h3 className="text-center mb-4">Register</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </form>

                <p className="mt-3 text-center">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-primary fw-bold text-decoration-none"
                    >
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
