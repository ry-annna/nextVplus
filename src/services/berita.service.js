import axios from "axios";

export const getAllBerita = async (callback) => {
  try {
    const response = await axios.get(
      process.env.NODE_ENV === "production"
        ? "https://vplus.id/api/berita"
        : "http://localhost:3000/api/berita"
    );

    callback(response.data.data);
  } catch (error) {
    return error;
  }
};

export const createNewBerita = async (body, callback) => {
  try {
    const response = await axios.post(
      process.env.NODE_ENV === "production"
        ? "https://vplus.id/api/berita"
        : "http://localhost:3000/api/berita",
      body
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
