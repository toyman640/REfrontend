import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { getProperties } from '../redux/property/propertySlice';
import { deleteProperty } from '../redux/property/propertyDeatilsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.user);
  const newProperties = useSelector((state) => state.properties.properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  // const handleLogout = () => {
  //   dispatch(logOutUser())
  //     .then(() => {
  //       navigate('/login-page');
  //     })
  //     .catch(() => {
  //     });
  // };

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
    return <div>Loading1...</div>;
  }

  return (
    <div className="DashboardPage">
      <div className="">
        <h2>Properties Posted By You</h2>
      </div>
      <div className="AddPropDiv">
        <Link to="/create-new-property" className="PropButton">
          <span className="AddIcon"><FaPlusCircle /></span>
          <span className="NewProp"> New Property</span>
        </Link>
      </div>

      {newProperties.length === 0 ? (
        <div>
          <h2>No Properties</h2>
          <div className="AddPropDiv">
            <Link to="/create-new-property" className="PropButton">
              <span className="AddIcon"><FaPlusCircle /></span>
              <span className="NewProp"> New Property</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="TableDiv">
          <table className="DashboardTable">
            <thead className="TableHead">
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Date Posted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="TableBody">
              {newProperties.map((property) => (
                <tr key={property.id}>
                  <td>{property.title}</td>
                  <td>{property.price}</td>
                  <td>{formatDateTime(property.created_at)}</td>
                  <td>
                    <div className="ActionTable">
                      <Link to={`/property-details/${property.id}`} className="Details">View Details</Link>
                      <button type="button" onClick={() => handleDelete(property.id)} className="DeletePost">
                        <FaTrashAlt />
                        {' '}
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
