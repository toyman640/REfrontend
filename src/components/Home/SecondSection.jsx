import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { FaBath, FaBed, FaWallet } from 'react-icons/fa';
import { getProperties } from '../../redux/property/propertySlice';

const SecondSection = () => {
  const dispatch = useDispatch();
  const newProperites = useSelector((state) => state.properties.properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);
  const formatPrice = (price) => new Intl.NumberFormat('en-US').format(price);
  return (
    <div className="SecondContainer">
      <h3 className="Ttile">
        LATEST PROPERTIES
        <hr className="UnderLine" />
      </h3>

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
                <p className="CardPrice">
                  <FaWallet />
                  {' '}
                  &#x20A6;
                  {' '}
                  {formatPrice(property.price)}
                </p>
                <div className="MoreDeatils">
                  <p className="CardPrice">
                    <FaBath />
                    {' '}
                    {property.no_of_bathrooms}
                  </p>
                  <p className="CardPrice">
                    <FaBed />
                    {' '}
                    {property.no_of_rooms}
                  </p>
                </div>
                <p className="TimeTag">
                  Posted:
                  {formatDistanceToNow(new Date(property.created_at), { addSuffix: true })}
                </p>
                {/* <p>{property.address}</p> */}

                {/* <p>
                  Posted  by :
                  {property.created_by.email}
                </p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
