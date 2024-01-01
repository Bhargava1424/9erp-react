import React, { useState } from "react";
import Navbar from "./Navbar";

function Login2({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Sample admin and accountant credentials
    const adminCredentials = { email: "admin@example.com", password: "admin123" };
    const accountantCredentials = { email: "accountant@example.com", password: "accountant123" };

    // Validation using regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || password.trim() === "") {
      alert("Invalid email or password format.");
      return;
    }

    // Check user credentials and set role
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setRole("Admin");
      alert("Admin Login Successful");
      // Call the onLogin callback
      onLogin("Admin");
    } else if (email === accountantCredentials.email && password === accountantCredentials.password) {
      setRole("Accountant");
      alert("Accountant Login Successful");
      // Call the onLogin callback
      onLogin("Accountant");
    } else {
      alert("Invalid credentials.");
      return;
    }
    // Log in logic (you may want to use authentication libraries or APIs here)

    // Now you have the role, and you can redirect or handle access accordingly
  };

  return (
    <>
      <div className="login-card flex justify-center items-center h-screen">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="m-2 p-2 border border-solid border-gray-700 rounded bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="m-2 p-2 border border-solid border-gray-700 rounded bg-gray-800 text-white"
          />
          <div className="button-container">
            <button type="submit" className="login-btn bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
              Login
            </button>
            <button className="register-btn bg-gray-800 border border-solid border-blue-500 text-blue-500 rounded px-4 py-2 hover:bg-gray-700">
              Forgot Password
            </button>
          </div>
        </form>
      </div>
      {/* Pass the userRole to Navbar */}
      {/* <Navbar userRole={role} />       */}
    </>
  );
}

export default Login2;
