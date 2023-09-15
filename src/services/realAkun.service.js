import axios from "axios";

export const postRealAkun = async (formData) => {
  try {
    const response = await axios.post(
      `https://tes-be.vercel.app/real-users`,
      formData
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
