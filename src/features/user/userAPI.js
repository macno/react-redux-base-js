import axios from "../../app/axios";

export function fetchUser() {
    return axios.get('/user')
}
