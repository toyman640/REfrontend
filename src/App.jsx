import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
          <Route exact path="/" element={<Home />} />
          <Route path="/login-page" element={<Login />} />
          
          <Route path="/create-new-property" element={<PropertyForm />} />
          <Route path="/property-details/:id" element={<PropertyDetails />} />
          <Route path="/dashboard-page" element={<ProtectRoute Component={Dashboard} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
