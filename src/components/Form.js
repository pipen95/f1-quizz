import React from "react";
export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-center">How much do you rate [Drivers Name]?</h2>

      <div className="rating">
        <input
          id="star10"
          name="star"
          type="radio"
          defaultValue={10}
          className="radio-btn hide"
        />
        <label htmlFor="star10">☆</label>
        <input
          id="star9"
          name="star"
          type="radio"
          defaultValue={9}
          className="radio-btn hide"
        />
        <label htmlFor="star9">☆</label>
        <input
          id="star8"
          name="star"
          type="radio"
          defaultValue={8}
          className="radio-btn hide"
        />
        <label htmlFor="star8">☆</label>
        <input
          id="star7"
          name="star"
          type="radio"
          defaultValue={7}
          className="radio-btn hide"
        />
        <label htmlFor="star7">☆</label>
        <input
          id="star6"
          name="star"
          type="radio"
          defaultValue={6}
          className="radio-btn hide"
        />
        <label htmlFor="star6">☆</label>
        <input
          id="star5"
          name="star"
          type="radio"
          defaultValue={5}
          className="radio-btn hide"
        />
        <label htmlFor="star5">☆</label>
        <input
          id="star4"
          name="star"
          type="radio"
          defaultValue={4}
          className="radio-btn hide"
        />
        <label htmlFor="star4">☆</label>
        <input
          id="star3"
          name="star"
          type="radio"
          defaultValue={3}
          className="radio-btn hide"
        />
        <label htmlFor="star3">☆</label>
        <input
          id="star2"
          name="star"
          type="radio"
          defaultValue={2}
          className="radio-btn hide"
        />
        <label htmlFor="star2">☆</label>
        <input
          id="star1"
          name="star"
          type="radio"
          defaultValue={1}
          className="radio-btn hide"
        />
        <label htmlFor="star1">☆</label>
        <div className="clear" />
      </div>
      <hr className="hr" />
      <h3 className="text-center">Tell us where you're voting from 🗺 😄!</h3>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input className="form-control" id="country" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
