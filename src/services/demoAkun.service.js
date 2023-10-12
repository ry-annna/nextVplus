import axios from "axios";

export const postDemoAkun = async (body) => {
  try {
    const response = await axios.post(
      "https://images.vplus.id/demo-users",
      body
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
