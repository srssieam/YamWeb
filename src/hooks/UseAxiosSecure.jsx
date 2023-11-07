import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const UseAxiosSecure = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:7000/v1/api',
        withCredentials: true,
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
        credentials: 'include'
    })

    const { userSignOut } = useContext(AuthContext);
    const goto = useNavigate();

    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                userSignOut()
                    .then(() => {
                        goto('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [goto, userSignOut, instance.interceptors.response])

    return instance
};

export default UseAxiosSecure;