import axios from "axios";

export const postRealAkun = async (formData) => {
  try {
    const response = await axios.post(
      process.env.BASE_URL_API_REALUSER ||
        "http://localhost:3000/api/real-users",
      formData
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
