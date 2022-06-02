import axios from 'axios';

const postLogin = async ({ email, password }) => {
  try {
    const baseURL = `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}/login`;

    const response = await axios.post({ baseURL }, {
      email,
      password,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postLogin;
