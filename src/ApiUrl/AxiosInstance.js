import axios from "axios";
import { baseurl } from "./ApiUrl";

let axiosInstance=axios.create({
    baseURL:baseurl,
})

export default axiosInstance