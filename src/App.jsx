import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PropertyForm from './components/PropertyForm';
import PropertyDetails from './components/ShowProperty';

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/dashboard-page" element={<Dashboard />} />
          <Route path="/create-new-property" element={<PropertyForm />} />
          <Route path="/property-details/:id" element={<PropertyDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
