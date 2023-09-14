import axios from "axios";

export const postRealAkun = async (formData, callback) => {
  try {
    axios
      .post(`https://tes-be.vercel.app/real-users`, formData)
      .then((response) => {
        callback(response.data);
      });
  } catch (error) {
    console.error(error);
    // response.status(500).send("Error fetching data");
  }
};
