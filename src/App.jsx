import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <BrowserRouter>
        <Routes>
          <Route exact path="/login-page" element={<Login />} />
          <Route exact path="/dashboard-page" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
