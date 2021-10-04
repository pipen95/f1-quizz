import React, { useState } from "react";
import CountrySelect from "react-bootstrap-country-select";
import ReactStars from "react-rating-stars-component";

export const Form = ({ onSubmit }) => {
  const [rating, ratingChanged] = useState(null);
  const [value, setValue] = useState(null);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className="text-center">How much do you rate []</h2>
        <div className="d-flex justify-content-center align-items-center">
          <input id="rate" className="form-control hide" value={rating} />
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={40}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
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
