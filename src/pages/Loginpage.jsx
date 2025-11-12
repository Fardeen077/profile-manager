import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Loginpage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

        if (
            storedUser &&
            storedUser.email === formData.email &&
            storedUser.password === formData.password
        ) {
            dispatch(loginSuccess(storedUser));
            alert("✅ Login Successful!");
            navigate("/profile");
        } else {
            alert("❌ Invalid Email or Password");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
                <h3 className="text-center mb-4">Login</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <p className="mt-3 text-center">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-primary fw-bold text-decoration-none">
                            Register here
                        </Link>
                    </p>

                    <button type="submit" className="btn btn-success w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Loginpage;
