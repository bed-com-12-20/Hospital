import React, { useState } from "react";
import "./style.css";
import icon from "../../images/icon.png";
import Image from "next/image";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const API_URL = "https://lph-backend.onrender.com/Staff/login";

interface LoginFormProps {
  onLoginSucess: () => void;
  redirectToAdmin: () => void;
  redirectToDepartment: (department: string) => void;
}

export default function LoginForm({
  redirectToAdmin,
  redirectToDepartment,
}: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsloading(true);
    setMessage("");

    try {
      console.log("submitting form");
      const response = await fetch(
        "https://lph-backend.onrender.com/Staff/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      if (response.ok) {
        console.log("Login successiful");
        const api = await response.json();
        const data = api.user;
        console.log("User data:", data);

        if (data.roles.includes("admin")) {
          redirectToAdmin();
        } else if (data.roles.includes("admin") && data.assignedDepartment) {
          redirectToDepartment(data.assignedDepartment);
        } else {
          console.error("invalid credentials or insuffient role information");
          setMessage("invalid credentials or insuffient role information");
        }
      }
    } catch (error) {
      console.error("Error during login", error);
      setMessage("Login failed. please try again");
    } finally {
      setIsloading(false);
    }
  };
  const handleLoginButton = () => {
    console.log("Button Clicked!", message);
  };

  return (
    <div>
      <div className="form">
        <div className="form-wrapper">
          <div className="header1">
            <div className="logo-container">
              <Image
                className="center"
                src={icon}
                alt="talking"
                width={100}
                height={100}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <h1>Staff Login</h1>
            <form onSubmit={handleLogin}>
              <label className="name">Username</label>
              <input
                type="text"
                id="name"
                placeholder="your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="name">Password</label>
              <input
                type="password"
                id="name"
                value={password}
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="Dashboard">
                <button
                  className="button1"
                  type="submit"
                  onClick={handleLoginButton}
                >
                  {isLoading ? "Logging in ... " : "Login"}
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
