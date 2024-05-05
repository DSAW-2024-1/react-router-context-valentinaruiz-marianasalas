import { Menu } from '../../components';

const Overview = () => {
  return (
    <div>
      <h1>Overview</h1>
      <p>Con esta aplicación, podrás explorar las siguientes rutas una vez que hayas iniciado sesión:</p>
      <ul>
        <li>/ - Inicio (Home)</li>
        <li>/overview - Resumen (Overview), aqui es donde estas actualemnte</li>
        <li>/contact - Contacto (Contact)</li>
        <li>/logout - Cerrar sesión</li>
      </ul>

      <Menu />
    </div>
  );
}

export default Overview;