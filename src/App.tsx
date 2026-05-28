import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
