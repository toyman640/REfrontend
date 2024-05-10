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

  useEffect(() => {
    dispatch(getPropertyDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1 className="MainComponent">Property Details</h1>
      {propertyDetails && (
        <div>
          <h4>{propertyDetails.title}</h4>
          <p>{propertyDetails.price}</p>
          <p>{propertyDetails.address}</p>
          {propertyDetails.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
