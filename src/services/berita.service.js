import axios from "axios";

export const getAllBerita = async (callback) => {
  try {
    const response = await axios.get(`https://tes-be.vercel.app/berita`);
    callback(response.data.data);
    // console.log(response.data);
    // return data;
  } catch (error) {
    console.error(error);
    // response.status(500).send("Error fetching data");
  }
};
