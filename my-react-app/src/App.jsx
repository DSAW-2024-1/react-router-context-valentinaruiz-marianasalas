import Login from "./pages/Login/login";
import Logout from "./pages/logout/Logout";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Overview from "./pages/Overview/overview";
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
            <Route path={"/logout"} element={<Logout />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/overview"} element={<Overview />} />

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