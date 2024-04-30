import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* Agrega más enlaces aquí si es necesario */}
      </ul>
    </nav>
  );
}

export default Menu;