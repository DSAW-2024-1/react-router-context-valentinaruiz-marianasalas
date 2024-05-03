import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const authContext = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verificar si las credenciales son correctas
    if (credentials.username === "admin@admin.com" && credentials.password === "admin") {
      // Credenciales válidas
      localStorage.setItem('username', credentials.username);
      authContext.signIn();
      window.location.href = '/';
    } else {
      // Credenciales incorrectas
      setErrorMessage("Las credenciales son incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </div>
        {errorMessage && (
          <p style={{ color: 'red' }}>{errorMessage}</p>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
