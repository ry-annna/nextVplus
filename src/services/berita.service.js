import axios from "axios";

export const getAllBerita = async (callback) => {
  try {
    const response = await axios.get(
      "https://next-vplus.vercel.app/api/berita" ||
        "http://localhost:3000/api/berita"
    );

    callback(response.data.data);
  } catch (error) {
    return error;
  }
};
