import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProperties } from '../redux/property/propertySlice';
import '../main.scss';

const Home = () => {
  const dispatch = useDispatch();
  const newProperites = useSelector((state) => state.properties.properties);
  console.log(newProperites);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);
  return (
    <div>
      <h1 className="MainComponent">This is home page</h1>
      <div>
        <h3>Latest propertties</h3>
        <div>
          {newProperites.map((property) => (
            <div key={property.id}>
              <h4>{property.title}</h4>
              <p>{property.price}</p>
              <p>{property.ownership_type_id_name}</p>
              <p>Posted  by :{property.created_by_id_email} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
