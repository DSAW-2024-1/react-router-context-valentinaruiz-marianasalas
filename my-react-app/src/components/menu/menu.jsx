import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, AuthStatus } from '../../contexts/AuthContext'; 

const Menu = () => {
  const { authStatus, signOut } = useContext(AuthContext);

  const handleLogout = async () => {
    localStorage.setItem("username", "");
    signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/overview">Overview</Link></li>
        {authStatus === AuthStatus.SignedOut && <li><Link to="/login">Login</Link></li>}
        {authStatus === AuthStatus.SignedIn && <li><button onClick={handleLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
}

export default Menu;
