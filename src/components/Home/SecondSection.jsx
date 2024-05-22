import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProperties } from '../../redux/property/propertySlice';
import { Link } from 'react-router-dom';

const SecondSection = () => {
  const dispatch = useDispatch();
  const newProperites = useSelector((state) => state.properties.properties);
  console.log(newProperites);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);
  return (
    <div className="SecondContainer">
      <h3>Latest propertties</h3>
      <div className="LatestPost">
        {newProperites.map((property) => (
          <div className="PropertyCard" key={property.id}>
            <Link className="CardLink" to={`/property-details/${property.id}`}>
              <div className="ImageCardDiv">
                {property.first_image_url && (
                  <img className="CardImage" src={property.first_image_url} alt={property.title} />
                )}
              </div>
              <div className="CardContent">
                <p className="CategoryTag">
                  For
                  {property.ownership_type.name}
                </p>
                <p className="CardTiltle">{property.title}</p>
                <p>{property.property_type.name}</p>
                <p>{property.price}</p>
                <p>{property.address}</p>
                <p>
                  Posted  by :
                  {property.created_by.email}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
  );
};

export default SecondSection;