import axios from "axios";

    const instance = axios.create({
        baseURL: 'https://yamweb.vercel.app/v1/api',
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        credentials: 'include'
    })
const UseAxios = () => {
    return instance
};

export default UseAxios;