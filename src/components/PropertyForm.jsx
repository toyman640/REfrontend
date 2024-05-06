import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyTypes } from "../redux/Categories/propTypeSlice";

const PropertyForm = () => {
  const dispatch = useDispatch();
  const imagesRef = useRef([]);
  const getPropTypes = useSelector((state) => state.propertyTypes.propertyTypes.length > 0);

  useEffect(() => {
    if (!getPropTypes) {
      dispatch(getPropertyTypes());
    }
  }, [dispatch, getPropTypes]);
  const propTypeOptions = useSelector((state) => state.propertyTypes.propertyTypes);

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="title">
            Title:
            <input type="text" placeholder="3 bed room flat" required />
          </label>
        </div>
        <div>
          <label htmlFor="price">
            Price:
            <input type="number" name="price" id="price" />
          </label>
        </div>
        <div>
          <label htmlFor="rooms">
            Rooms:
            <input type="number" name="rooms" id="rooms" />
          </label>
        </div>
        <div>
          <label htmlFor="bathrooms">
            Bahtrooms:
            <input type="number" name="bathrooms" id="rooms" />
          </label>
        </div>
        <div>
          <label htmlFor="property_type">
            Property Type:
            <select name="property_type" id="">
              <option value="">Select Property Type</option>
              {propTypeOptions.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="property_type">
            Ownership Type Type:
            <select name="ownership_type" id="">
              <option value=""></option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="address">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Images
            <input type="file" name="image" id="image" multiple ref={imagesRef} />
          </label>
        </div>
        <input type="submit" value="Create Property" />
      </form>
    </div>
  );
};

export default PropertyForm;