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
        <div className="BannerContent">
          <div>
            <p className="BannerTopText">Not just a roof over your head...A HOME!!!</p>
            <h1 className="BannerMainText">MOST RELIABLE REAL ESTATE COMPANY.</h1>
            <p className="BannerBottomText">Many real estate firm can find you an apratment, let us find you a home without making you break a sweat.</p>
          </div>
          <div className="FormSection">
            <form action="" className="SearchForm">
              <label htmlFor="" className="FormFieldLabel">
                Deal Type <br />
                <select name="" id="" className="FormField">
                  <option value="">Rent</option>
                  <option value="">Sale</option>
                  <option value="">Lease</option>
                  <option value="">Any</option>
                </select>
              </label>
              <label htmlFor="" className="FormFieldLabel">
                Property Category <br />
                <select name="" id="" className="FormField">
                  <option value="">Buildings</option>
                  <option value="">Lands</option>
                  <option value="">Residential</option>
                  <option value="">Commercial</option>
                </select>
              </label>
              <label htmlFor="" className="FormFieldLabel">
                Maximun Price <br />
                <input type="number" name="price" id="" className="FormInput" placeholder="300000"  />
              </label>

              <button type="button">Submit</button>
            </form>
          </div>
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
