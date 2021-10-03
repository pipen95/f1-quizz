import React, { useState } from "react";
import CountrySelect from "react-bootstrap-country-select";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState(null);
  console.log(value);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className="text-center">How much do you rate [Drivers Name]?</h2>

        <ReactStars
          className="text-center"
          count={10}
          onChange={ratingChanged}
          size={30}
          activeColor="#ffd700"
        />
        <hr className="hr" />
        <h3 className="text-center">Tell us where you're voting&nbsp;from!</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input id="country" className="form-control hide" value={value} />
          <CountrySelect value={value} onChange={setValue} valueAs="id" />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
