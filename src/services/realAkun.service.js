import axios from "axios";

export const postRealAkun = async (body) => {
  try {
    const response = await axios.post(
      "https://images.vplus.id/real-users",
      body
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
