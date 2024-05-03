import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const Logout = () => {
  const authContext = useContext(AuthContext);

  return (
    <button
      onClick={async () => {
        localStorage.setItem("username", "");
        authContext.signOut();
        window.location.href = "/login";
      }}
    >
      Logout
    </button>
  );
};

export default Logout;