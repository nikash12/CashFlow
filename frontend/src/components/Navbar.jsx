import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  
  const navigate = useNavigate()
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [login,setLogin] = useState(false)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token)
    setLogin(true)
  }, []);
  
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  function handleSignOut(){
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <div className="navbar bg-blue-500 shadow-sm border-b-[0.5px]">
  
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CashFlow</a>
      </div>
      <div className="flex">
        {
          !login?
          <>
            <button className="m-1" onClick={()=>navigate("/Login")}>Login</button>
        <button className="m-1" onClick={()=>navigate("/Register")}>SignUp</button>
          </>:
          <button className="mr-5" onClick={handleSignOut}>Logout</button>
        }
        <button onClick={toggleTheme} className="btn btn-sm">
          Toggle {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
