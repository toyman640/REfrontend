import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProperties } from '../../redux/property/propertySlice';
import { Link } from 'react-router-dom';
import { FaBath, FaBed, FaWallet  } from "react-icons/fa";

const SecondSection = () => {
  const dispatch = useDispatch();
  const newProperites = useSelector((state) => state.properties.properties);
  console.log(newProperites);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US').format(price);
  };
  return (
    <div className="SecondContainer">
      <h3 className="Ttile">LATEST PROPERTIES  <hr className="UnderLine" /></h3>
     
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
                <p><FaWallet /> &#x20A6; {formatPrice(property.price)}</p>
                <div className="MoreDeatils">
                 <p><FaBath /> {property.no_of_bathrooms}</p>
                 <p><FaBed /> {property.no_of_rooms}</p>
                </div>
                <p>{property.created_at}</p>
                {/* <p>{property.address}</p> */}
                
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