import axios from "axios";

export const postDemoAkun = async (formData) => {
  try {
    const response = await axios.post(
      `https://tes-be.vercel.app/demo-users`,
      formData
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
