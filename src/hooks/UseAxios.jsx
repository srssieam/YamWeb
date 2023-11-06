import axios from "axios";

    const instance = axios.create({
        baseURL: 'http://localhost:7000/v1/api',
        withCredentials: true
    });
const UseAxios = () => {
    return instance
};

export default UseAxios;