import axios from "axios";

export const postDemoAkun = async (formData, callback) => {
  try {
    axios
      .post(`https://tes-be.vercel.app/demo-users`, formData)
      .then((response) => {
        callback(response.data);
      });
  } catch (error) {
    console.error(error);
    // response.status(500).send("Error fetching data");
  }
};
