import axios from "axios";

export const getAllBerita = async (callback) => {
  try {
    const response = await axios.get(
      process.env.BASE_URL_API_BERITA || "http://localhost:3000/api/berita"
    );

    callback(response.data.data);
  } catch (error) {
    return error;
  }
};
