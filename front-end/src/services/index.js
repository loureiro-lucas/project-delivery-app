import axios from 'axios';

const postLogin = async ({ email, password }) => {
  try {
    const baseURL = 'http://localhost:3001/login';

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
