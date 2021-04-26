import axios from "../../app/axios";

export function fetchUser() {
    console.log(axios.baseURL);

    return axios.get('/user')
}
