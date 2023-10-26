import axios from "axios";

export const getAllBerita = async (callback) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BERITA_URL}`);

    callback(response.data.data);
  } catch (error) {
    return error;
  }
};

export const createNewBerita = async (body, callback) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BERITA_URL}`,
      body
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
