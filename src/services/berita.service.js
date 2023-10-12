import axios from "axios";

export const getAllBerita = async (callback) => {
  try {
    const response = await axios.get("https://images.vplus.id/berita");

    callback(response.data.data);
  } catch (error) {
    return error;
  }
};

export const createNewBerita = async (body, callback) => {
  try {
    const response = await axios.post("https://images.vplus.id/berita", body);

    return response.data;
  } catch (error) {
    return error;
  }
};
