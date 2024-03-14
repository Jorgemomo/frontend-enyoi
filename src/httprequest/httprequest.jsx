import axios from "axios";

export const post = async (url, formData, cbResponse) => {
  try {
    const { data } = await axios.post(url, formData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const get = async (url, cbResponse) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};
