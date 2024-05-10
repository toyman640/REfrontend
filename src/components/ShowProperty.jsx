// PropertyDetails.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPropertyDetails } from '../redux/property/propertyDeatilsSlice';
import '../main.scss';

const PropertyDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const propertyDetails = useSelector((state) => state.propertyDetails.propertyDetails);
  console.log(propertyDetails);

  useEffect(() => {
    dispatch(getPropertyDetails(id));
  }, [dispatch, id]);

  if (!propertyDetails) {
    return <div>Loading...</div>; // Add a loading indicator
  }

  return (
    <div>
      <h1 className="MainComponent">Property Details</h1>
      {propertyDetails && (
        <div>
          <h4>{propertyDetails.property.title}</h4>
          <p>{propertyDetails.property.price}</p>
          <p>{propertyDetails.property.address}</p>
          <p>For {propertyDetails.property.ownership_type.name}</p>
          <p>{propertyDetails.property.property_type.name}</p>
          <p>Posted by: {propertyDetails.property.created_by.email}</p>
          {propertyDetails.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
