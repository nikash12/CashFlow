import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  
  const navigate = useNavigate()
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm border-b-[0.5px]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CashFlow</a>
      </div>
      <div className="flex">
        <button className="m-1" onClick={()=>navigate("/Login")}>Login</button>
        <button className="m-1" onClick={()=>navigate("/Register")}>SignUp</button>
        <button onClick={toggleTheme} className="btn btn-sm">
          Toggle {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
