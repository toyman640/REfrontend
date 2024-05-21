import React from 'react';
import SecondSection from './SecondSection';
import '../../main.scss';


const Home = () => {
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
        <SecondSection />
      </div>
    </div>
  );
};

export default Home;
