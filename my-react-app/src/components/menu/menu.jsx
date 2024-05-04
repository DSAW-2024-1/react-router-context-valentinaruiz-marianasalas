import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, AuthStatus } from '../../contexts/AuthContext'; 

const Menu = () => {
  const { authStatus } = useContext(AuthContext);

  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/overview">Overview</Link></li>
        {authStatus === AuthStatus.SignedOut && <li><Link to="/login">Login</Link></li>}
        {authStatus === AuthStatus.SignedIn && <li><Link to="/logout">Logout</Link></li>}
      </ul>
    </nav>
  );
}

export default Menu;
