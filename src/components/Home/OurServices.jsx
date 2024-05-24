import React from 'react';
import { FaHome, FaRegHandshake } from 'react-icons/fa';

import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { PiBuildingOfficeBold } from 'react-icons/pi';
import { HiOfficeBuilding } from 'react-icons/hi';
import { FaMapLocationDot } from 'react-icons/fa6';

const OurServices = () => (
  <div className="ServiceSection">
    <h3 className="Ttile">
      Our Services
      <hr className="UnderLine" />
    </h3>
    <div className="ServiceContent">
      <div className="GridChild">
        <p className="ServiceIcon"><FaHome /></p>
        <p className="ServiceTitle">Buy a home</p>
        <p className="ServiceText">Buy your dream home with us today! Our wide selection of properties and expert agnents will guide you</p>
      </div>
      <div className="GridChild">
        <p className="ServiceIcon"><MdOutlineRealEstateAgent /></p>
        <p className="ServiceTitle">Rent a home</p>
        <p className="ServiceText">Buy your dream home with us today! Our wide selection of properties and expert agnents will guide you</p>
      </div>
      <div className="GridChild">
        <p className="ServiceIcon"><FaRegHandshake /></p>
        <p className="ServiceTitle">Become an agent</p>
        <p className="ServiceText">Buy your dream home with us today! Our wide selection of properties and expert agnents will guide you</p>
      </div>
      <div className="GridChild">
        <p className="ServiceIcon"><PiBuildingOfficeBold /></p>
        <p className="ServiceTitle">Luxury Apartment</p>
        <p className="ServiceText">Buy your dream home with us today! Our wide selection of properties and expert agnents will guide you</p>
      </div>
      <div className="GridChild">
        <p className="ServiceIcon"><HiOfficeBuilding /></p>
        <p className="ServiceTitle">Offices</p>
        <p className="ServiceText">Buy your dream home with us today! Our wide selection of properties and expert agnents will guide you</p>
      </div>
      <div className="GridChild">
        <p className="ServiceIcon"><FaMapLocationDot /></p>
        <p className="ServiceTitle">Landed Propeties</p>
        <p className="ServiceText">Buy your dream home with us today! Our wide selection of properties and expert agnents will guide you</p>
      </div>
    </div>
  </div>
);

export default OurServices;
