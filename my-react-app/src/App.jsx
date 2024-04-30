import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Contact, Login } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;