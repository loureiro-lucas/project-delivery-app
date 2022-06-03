import axios from 'axios';

const baseURL = `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}`;

export const postLogin = async ({ email, password }) => {
  try {
    const loginURL = `${baseURL}/login`;

    const response = await axios.post(loginURL, {
      email,
      password,
    });

    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const postRegister = async (name, email, password) => {
  try {
    const registerURL = `${baseURL}/register`;
    const response = await axios.post(registerURL, { name, email, password });

    return response;
  } catch (error) {
    console.error(error.message);
  }
};
