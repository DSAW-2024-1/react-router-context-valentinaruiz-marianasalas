import { useState, useEffect } from 'react';
import { Menu } from '../../components';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya está logueado al cargar la página
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedInStatus === 'true');
    }, []);

    const handleLogin = () => {
        if (email === 'admin@admin.com' && password === 'admin') {
            // Guardar el estado de inicio de sesión en localStorage
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
            // Redirigir al usuario a la página de inicio de sesión exitoso
            console.log('Inicio de sesión exitoso');
        } else {
            setErrorMessage('Correo electrónico o contraseña incorrectos');
        }
    };

    const handleLogout = () => {
        // Eliminar el estado de inicio de sesión en localStorage
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <h1>{isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}</h1>
            <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={toggleShowPassword}>
                    {showPassword ? "Ocultar" : "Mostrar"}
                </button>
            </div>
            {errorMessage && <p>{errorMessage}</p>}
            {isLoggedIn ? (
                <button onClick={handleLogout}>Cerrar Sesión</button>
            ) : (
                <button onClick={handleLogin}>Iniciar Sesión</button>
            )}
            <Menu />
        </div>
    );
};

export default Login;
