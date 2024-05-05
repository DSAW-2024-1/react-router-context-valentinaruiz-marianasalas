import {Login,  Contact, Home, Overview} from "./pages";
import { Menu } from "./components";
import './App.css'
import AuthProvider, {
  AuthIsNotSignedIn,
  AuthIsSignedIn,
} from "./contexts/AuthContext";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <AuthProvider>
      <AuthIsSignedIn>
        <Router>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/overview"} element={<Overview />} />
            <Route path="*" element={<>
              <p>Error</p>
              <p>Las rutas permitidas son:</p>
              <Menu />
            </>} />
          </Routes>
        </Router>
      </AuthIsSignedIn>
      <AuthIsNotSignedIn>
        <Router>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/login"} element={<Login />} />
            <Route path="*" element={<Navigate replace to={"/login"} />} />
          </Routes>
        </Router>
      </AuthIsNotSignedIn>
    </AuthProvider>
  );
}