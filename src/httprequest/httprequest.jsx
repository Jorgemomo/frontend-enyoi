import axios from "axios";

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

export const post = async (url, formData, cbResponse) => {
  try {
    const { data } = await axios.post(url, formData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const postAuth = async (url, formData, cbResponse) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    const { data } = await axios.post(url, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteService = async (url, cbResponse) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    const { data } = await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (url, formData, cbResponse) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    const { data } = await axios.put(url, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};
