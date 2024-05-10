import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOutUser } from '../redux/user/userSlice';
import { getProperties } from '../redux/property/propertySlice';
import { deleteProperty } from '../redux/property/propertyDeatilsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.user.user);
  const newProperties = useSelector((state) => state.properties.properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logOutUser())
      .then(() => {
        navigate('/login-page');
      })
      .catch(() => {
      });
  };

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
  };

  const handleDelete = (propertyId) => {
    dispatch(deleteProperty(propertyId))
      .then(() => {
        dispatch(getProperties());
      })
      .catch(() => {
        // Handle delete error if needed
      });
  };

  if (!newProperties) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>
        Hello,
        {loggedUser.email}
      </p>
      <button type="button" onClick={handleLogout}>Logout</button>

      {newProperties.length === 0 ? (
        <div>
          <h2>No Properties</h2>
          <Link to="/create-new-property">Post new Property</Link>
        </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Date Posted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {newProperties.map((property) => (
                <tr key={property.id}>
                  <td>{property.title}</td>
                  <td>{property.price}</td>
                  <td>{formatDateTime(property.created_at)}</td>
                  <td>
                    <Link to={`/property-details/${property.id}`}>View Details</Link>
                    <button type="button" onClick={() => handleDelete(property.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/create-new-property">Post new Property</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
