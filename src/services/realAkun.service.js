import axios from "axios";

export const postRealAkun = async (body) => {
  try {
    const response = await axios.post(
      process.env.NODE_ENV === "production"
        ? "https://vplus.id/api/real-users"
        : "http://localhost:3000/api/real-users",
      body
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
