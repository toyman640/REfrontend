import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PropertyForm from './components/PropertyForm';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <BrowserRouter>
        <Routes>
          <Route exact path="/login-page" element={<Login />} />
          <Route exact path="/dashboard-page" element={<Dashboard />} />
          <Route exact path="/create-new-property" element={<PropertyForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
