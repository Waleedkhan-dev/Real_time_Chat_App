import axios from "axios"

const axiosInstance = axios.create({
 baseURL: "https:/localhost:8000/api",
 withCredentials: true,

})

export { axiosInstance }