import axios from 'axios';

export default {
  login(loginInfo) {
    return axios.post('localhost:4000/auth/sign-in', loginInfo);
  },
};
