import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuth } from "../context/useAuth";
 
import chartImg from "../assets/chart.png";
import phoneImg from "../assets/phone.png";

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "India (भारत)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, error, clearError, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#e9ffe5ff" }}
    >
      <div className="row g-0">
        {/* Left Panel */}
        <div
          className="col-12 col-md-6  text-white d-flex flex-column justify-content-center align-items-center p-0"
          style={{ backgroundColor: "#e9ffe5ff" }}
        >
          <div className="w-100 position-relative">
            <img
              src={chartImg}
              alt="Chart"
              className="img-fluid w-100"
              style={{ objectFit: "cover", height: "100%" }}
            />
            <img
              src={phoneImg}
              alt="Phone"
              className="position-absolute d-none d-md-block"
              style={{
                width: "35%",
                bottom: "10%",
                right: "5%",
              }}
            />
            <div className="position-absolute top-0 w-100 text-center mt-4">
              <h1 className="fw-bold text-white"> Vintageprimefx</h1>
              <p className="text-uppercase text-white">Trade with Confidence</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="col-12 col-md-6 d-flex justify-content-center align-items-center p-4"
          style={{ backgroundColor: "#e9ffe5ff" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <div className="d-flex justify-content-around mb-4">
              <button className="btn btn-link text-success border-bottom border-success">
                Sign Up
              </button>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                try {
                  await register(formData);
                  // Navigation will happen automatically due to the useEffect
                } catch (err) {
                  console.error("Registration error:", err);
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              {error && (
                <Alert variant="danger" onClose={clearError} dismissible>
                  {error}
                </Alert>
              )}

              <div className="mb-3">
                <label className="form-label">First Name</label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-key"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                  />
                </div>
                <small className="text-muted">
                  Password must be at least 6 characters
                </small>
              </div>

              <div className="mb-4">
                <label htmlFor="countrySelect" className="form-label">
                  Country
                </label>
                <select
                  id="countrySelect"
                  name="country"
                  className="form-select"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="India (भारत)">India (भारत)</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="Singapore">Singapore</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100 mb-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Creating Account...
                  </>
                ) : (
                  "Create My Account"
                )}
              </button>

              <small className="d-block text-muted mb-3 text-center">
                By creating an account, you agree to the{" "}
                <a href="#">privacy policy</a> and to receive economic and
                marketing communications from  Vintageprimefx.
              </small>

              <div className="text-center">
                <p className="mb-1">
                  Have a partner number? <a href="#">Click here</a>
                </p>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
