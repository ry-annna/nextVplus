import axios from "axios";

export const postDemoAkun = async (formData) => {
  try {
    const response = await axios.post(
      process.env.BASE_URL_API_DEMOUSER ||
        "http://localhost:3000/api/demo-users",
      formData
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
