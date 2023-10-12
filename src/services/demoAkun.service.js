import axios from "axios";

export const postDemoAkun = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_DEMOUSER_URL}`,
      body
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
