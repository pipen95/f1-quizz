import axios from "axios";

// const postData = async (id) => {
// try {
//   let result = await fetch(
//     "https://webhook.site/ab134c9d-fbf4-4d03-a1af-aa9007b907a9",
//     {
//       method: "post",
//       mode: "no-cors",
//       headers: {
//         "Accept": "application/json",
//         "Content-type": "application/json",
//       },

//       body: JSON.stringify({
//         driver_id:`${id}`,
//         country: `${formData.country !== undefined ? `${formData.country}` : `anonymous` }`,
//         name: `${formData.name !== undefined ? `${formData.name}`: `anonymous` }`,
//         info_consent: `${formData.info_consent !== undefined ? `${formData.info_consent}` :`no` }`,
//         rating: `${formData.rating !== undefined ? `${formData.rating}` :`no rate` }`,
//       })
//     }
//   );
//   console.log(result);
//   setSubmitting(true)

// } catch (e) {
//   console.log(e);
// }

export const postData = async (
  id,
  formData,
  setSubmitting,
  setFormData,
  closeModal
) => {
  try {
    let res = await axios.post(
      "https://webhook.site/ab134c9d-fbf4-4d03-a1af-aa9007b907a9",
      {
        driver_id: `${id}`,
        country: `${
          formData.country !== undefined ? `${formData.country}` : `anonymous`
        }`,
        name: `${
          formData.name !== undefined ? `${formData.name}` : `anonymous`
        }`,
        info_consent: `${
          formData.info_consent !== undefined
            ? `${formData.info_consent}`
            : `no`
        }`,
        rating: `${
          formData.rating !== undefined ? `${formData.rating}` : `no rate`
        }`,
      }
    );

    if (res.data.status === "success") {
      console.log(res);
      setSubmitting(true);
      window.setTimeout(() => {
        closeModal();
        setSubmitting(false);
        setFormData({
          reset: true,
        });
      }, 2000);
    }
  } catch (err) {
    console.log(err.response.data.err);
    window.setTimeout(() => {
      closeModal();
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 2000);
  }
};
