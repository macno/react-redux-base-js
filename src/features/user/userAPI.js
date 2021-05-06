import axios from "../../app/axios";

export function fetchUser() {
    return axios.get('/user')
}

export function sendUser(user) {
    return axios.put(`/user/${user.id}`, user)
}