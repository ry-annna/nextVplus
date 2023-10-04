import axios from "axios";

export const postDemoAkun = async (body) => {
  try {
    const response = await axios.post(
      process.env.NODE_ENV === "production"
        ? "https://vplus.id/api/demo-users"
        : "http://localhost:3000/api/demo-users",
      body
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
