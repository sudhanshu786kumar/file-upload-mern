import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "https://flsedmo.herokuapp.com/"
})