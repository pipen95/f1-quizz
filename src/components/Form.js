import React, { useReducer, useState } from "react";
import CountrySelectOptions from "./CountrySelect";
import StarRating from "./StarRating";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      country: "",
      name: "",
      info_consent: "no",
      rating: 0,
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

export const Form = ({ driver_name }) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const postData = async () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    postData();

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleClick = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{" "}
                {name !== "rating" ? value.toString() : value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">How much do you rate {driver_name}?</h2>

        <fieldset className="form-group" disabled={submitting}>
          <div className="d-flex justify-content-center align-items-center">
            <StarRating handleClick={handleClick} />
          </div>
        </fieldset>
        <hr className="hr" />
        <h3 className="text-center">
          Can you share where you're voting from ?
        </h3>
        <fieldset
          className="mt-4 mb-2 d-flex justify-content-center align-items-center"
          disabled={submitting}
        >
          <div className="form-check mr-2" onChange={handleChange}>
            <input
              className="form-check-input"
              type="radio"
              value="yes"
              name="info_consent"
              id="yes"
            />
            <label className="form-check-label" htmlFor="yes">
              Yes
            </label>
          </div>
          <div className="form-check" onChange={handleChange}>
            <input
              className="form-check-input"
              type="radio"
              name="info_consent"
              value="no"
              id="no"
            />
            <label className="form-check-label" htmlFor="no">
              No
            </label>
          </div>
        </fieldset>

        {formData.info_consent === "yes" && (
          <div>
            <fieldset className="form-group" disabled={submitting}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="form-control"
                name="name"
                onChange={handleChange}
                value={formData.name || ""}
              />
            </fieldset>
            <fieldset className="form-group" disabled={submitting}>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                className="form-control"
                onChange={handleChange}
                value={formData.country || ""}
              >
                <CountrySelectOptions />
              </select>
            </fieldset>
          </div>
        )}

        <div className="form-group">
          <button
            className="form-control btn btn-primary"
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
