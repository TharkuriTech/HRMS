import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../StageManagement/userSlice";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
 const dispatch = useDispatch();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Mock login validation
    if (email === "admin@gmail.com" && password === "admin") {
         dispatch(login({ email, name: "Sirancheevi" }));
        localStorage.setItem("isLoggedIn", "true");
        onLoginSuccess();
    } else {
      setErrors({ general: "Invalid email or password" });
    }
  };

  return (
    <div className="inner-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox shadow-sm grow">
            <div className="login-left">
              <img className="img-fluid" src="assets/img/logo.png" alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                {errors.general && (
                  <div className="alert alert-danger">{errors.general}</div>
                )}

                <form>
                  <div className="form-group">
                    <input
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-theme button-1 text-white ctm-border-radius btn-block"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
