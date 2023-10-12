import axios from "axios";

export const postRealAkun = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_REALUSER_URL}`,
      body
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
