import axios from "axios";

export const post = async (url, formData, cbResponse) => {
  try {
    const { data } = await axios.post(url, formData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};
