import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 w-full bg-[#020617] shadow-lg z-[999]">

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">

        <h2 className="text-3xl font-extrabold text-indigo-400">
          LoanAI
        </h2>

        <div className="flex gap-8 text-lg text-white items-center">

          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/result">Result</Link>
          <Link to="/history">History</Link>

          {/* ACCOUNT BUTTON */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-indigo-500 px-5 py-2 rounded-lg hover:bg-indigo-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-indigo-500 px-5 py-2 rounded-lg hover:bg-indigo-600"
            >
              Account
            </button>
          )}

        </div>

      </nav>

    </header>
  );
}