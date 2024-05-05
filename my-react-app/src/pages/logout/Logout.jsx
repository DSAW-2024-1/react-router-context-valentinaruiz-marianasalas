import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { Menu } from '../../components';


const Logout = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
    <p>Para cerrar la sesion oprima el mensaje que dice (cerrar sesion) en color negro justo debajo.</p>
    <button
      onClick={async () => {
        localStorage.setItem("username", "");
        authContext.signOut();
        window.location.href = "/login";
      }}
    >
      <strong>Cerrar sesión</strong>
    </button>
    <Menu />

    </div>
  );
};

export default Logout;