import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProperties } from '../redux/property/propertySlice';
import '../main.scss';

const Home = () => {
  const dispatch = useDispatch();
  const newProperites = useSelector((state) => state.properties.properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);
  return (
    <div>
      <div className="BannerPart">
        <div className="MessagePart">
          <h1 className="MainComponent">This is home page</h1>
        </div>
      </div>
      <div>
        <h3>Latest propertties</h3>
        <div>
          {newProperites.map((property) => (
            <div key={property.id}>
              <Link to={`/property-details/${property.id}`}>
                <h4>{property.title}</h4>
                <p>{property.price}</p>
                <p>{property.address}</p>
                <p>
                  For
                  {property.ownership_type.name}
                </p>
                <p>{property.property_type.name}</p>
                <p>
                  Posted  by :
                  {property.created_by.email}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
