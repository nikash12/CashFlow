import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:2001/api/Register", {
        firstname,
        lastname,
        username,
        password,
      });

      const token = res.data.token;
      localStorage.setItem("token", token);
      console.log("Signup successful");
      navigate("/Login"); 
    } catch (err) {
      console.error("Signup failedss", err);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <form
      className="flex justify-center items-center min-h-screen"
      onSubmit={handleSubmit}
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Sign Up</legend>

        <label className="label">First Name</label>
        <input
          type="text"
          className="input"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <label className="label">Last Name</label>
        <input
          type="text"
          className="input"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <label className="label">Username</label>
        <input
          type="text"
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="label">Confirm Password</label>
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4 w-full" type="submit">
          Sign Up
        </button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <p className="text-sm mt-2 text-center">
          Already have an account?{" "}
          <a href="/Login" className="text-blue-500 underline">
            Login
          </a>
        </p>
      </fieldset>
    </form>
  );
}
