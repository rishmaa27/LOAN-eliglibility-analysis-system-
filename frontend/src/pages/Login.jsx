import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter details");
      return;
    }

    try {
      const res = await API.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">

      <form onSubmit={handleLogin} className="bg-white/10 p-8 rounded-xl w-80">

        <h2 className="text-2xl text-white mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 w-full mb-4"
        />

        <button className="bg-indigo-500 w-full py-2 rounded">
          Login
        </button>

        <p className="text-center text-gray-300 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-indigo-400 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>

      </form>

    </div>
  );
}