import axios from "axios"

const instance = axios.create({
  baseURL: "/api"
});

instance.interceptors.response.use(
  function (successRes) {
    console.log(`Axios response interceptor`)
    return successRes;
  },
  function (error) {
    console.error(`Axios response interceptor ${JSON.stringify(error)}`)
    if (error.response.status === 401 ||
      error.response.status === 403 ||
      error.message.toLowerCase().includes('forbidden') ||
      error.message.toLowerCase().includes('unauthorized')) {
      window.location.assign('/accounts/login/')
    }
    return Promise.reject(error);
  }
);

export default instance;