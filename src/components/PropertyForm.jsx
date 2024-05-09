import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyTypes } from '../redux/Categories/propTypeSlice';
import { getOwnerTypes } from '../redux/Categories/ownershipTypeSlice';
import { createProperty } from '../redux/property/propertySlice';
import { getCurrentUser } from '../redux/user/userSlice';

const PropertyForm = () => {
  const dispatch = useDispatch();
  // const imagesRef = useRef([]);
  const getPropTypesLoaded = useSelector((state) => state.propertyTypes.propertyTypes.length > 0);
  const getOwnerTypesLoaded = useSelector((state) => state.ownerTypes.ownerTypes.length > 0);
  const getCurrentUserLoaded = useSelector((state) => state.user.currentUser !== null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    no_of_rooms: '',
    no_of_bathrooms: '',
    property_type: '',
    ownership_type: '',
    address: '',
    images: [],
    description: '',
    // created_by_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.prototype.slice.call(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };

  useEffect(() => {
    if (!getPropTypesLoaded) {
      dispatch(getPropertyTypes());
    }
    if (!getOwnerTypesLoaded) {
      dispatch(getOwnerTypes());
    }
    if (!getCurrentUserLoaded) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, getPropTypesLoaded, getOwnerTypesLoaded, getCurrentUserLoaded]);

  const propTypeOptions = useSelector((state) => state.propertyTypes.propertyTypes);
  const ownerTypeOptions = useSelector((state) => state.ownerTypes.ownerTypes);
  const currentUserPost = useSelector(state => state.user.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('property[title]', formData.title);
    formDataToSend.append('property[price]', formData.price);
    formDataToSend.append('property[description]', formData.description);
    formDataToSend.append('property[no_of_rooms]', formData.no_of_rooms);
    formDataToSend.append('property[no_of_bathrooms]', formData.no_of_bathrooms);
    formDataToSend.append('property[property_type_id]', formData.property_type);
    formDataToSend.append('property[ownership_type_id]', formData.ownership_type);
    formDataToSend.append('property[address]', formData.address);
    // formDataToSend.append('property[created_by_id]', formData.created_by_id);
    formDataToSend.append('property[created_by_id]', currentUserPost.id);
    for (let i = 0; i < formData.images.length; i += 1) {
      formDataToSend.append('property[images][]', formData.images[i]);
    }
    
    dispatch(createProperty(formDataToSend));
    setFormData({
      title: '',
      price: '',
      no_of_rooms: '',
      no_of_bathrooms: '',
      property_type: '',
      ownership_type: '',
      address: '',
      images: [],
      description: '',
      // created_by_id: ''
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="title">
            Title:
            <input type="text" name="title" placeholder="3 bed room flat" onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label htmlFor="price">
            Price:
            <input type="number" name="price" onChange={handleChange} id="price" required />
          </label>
        </div>
        <div>
          <label htmlFor="rooms">
            Rooms:
            <input type="number" name="no_of_rooms" onChange={handleChange} id="rooms" />
          </label>
        </div>
        <div>
          <label htmlFor="bathrooms">
            Bahtrooms:
            <input type="number" name="no_of_bathrooms" onChange={handleChange} id="rooms" />
          </label>
        </div>
        <div>
          <label htmlFor="property_type">
            Property Type:
            <select name="property_type" id="" onChange={handleChange}>
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
          <label htmlFor="ownership_type">
            Owner Type:
            <select name="ownership_type" id="" onChange={handleChange}>
              <option value="">Select Ownership Type</option>
              {ownerTypeOptions.map((owner) => (
                <option key={owner.id} value={owner.id}>
                  {owner.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="address">
            Address:
            <input type="text" name="address" onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label htmlFor="images">
            Images:
            <input type="file" name="images" id="images" multiple onChange={handleImageChange} accept="image/jpeg,image/png,image/gif" />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <textarea name="description" onChange={handleChange} cols="30" rows="10" />
          </label>
        </div>
        <div>
        {/* {currentUserPost && (
          <div>
            <input name="created_by_id" onChange={handleChange} type="text" value={currentUserPost.id} readOnly />
          </div>
        )} */}
        </div>
        <input type="submit" value="Create Property" />
      </form>
    </div>
  );
};

export default PropertyForm;
