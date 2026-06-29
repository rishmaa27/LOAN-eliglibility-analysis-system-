import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Registered successfully");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.msg || "Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">

      <form onSubmit={handleRegister} className="bg-white/10 p-8 rounded-xl w-80">

        <h2 className="text-2xl text-white mb-6 text-center">Register</h2>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="p-2 w-full mb-3"
        />

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
          Register
        </button>

      </form>

    </div>
  );
}