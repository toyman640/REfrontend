import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PropertyForm from './components/PropertyForm';
import PropertyDetails from './components/ShowProperty';
import ProtectRoute from './components/ProtectRoute';

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/create-new-property" element={<PropertyForm />} />
          <Route path="/property-details/:id" element={<PropertyDetails />} />
          <Route element={<ProtectRoute />} />
          <Route path="/dashboard-page" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
