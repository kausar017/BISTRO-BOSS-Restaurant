import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthHooks from "./AuthHooks";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
    const navigate = useNavigate(); // 'navigat' -> 'navigate' টাইপো সংশোধন
    const { logOut } = AuthHooks();

    // Request interceptor
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("access-token");
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            // Handle request error
            return Promise.reject(error);
        }
    );

    // Response interceptor
    axiosSecure.interceptors.response.use(
        (response) => response, // সরাসরি রেসপন্স রিটার্ন
        async (error) => {
            const status = error.response?.status;
            if (status === 401 || status === 403) {
                await logOut();
                navigate("/login");
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
