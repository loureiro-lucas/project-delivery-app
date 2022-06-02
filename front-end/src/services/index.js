import axios from 'axios';

const postLogin = async ({ email, password }) => {
  try {
    const URL = '';

    const response = await axios.post(URL, {
      email,
      password,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postLogin;
