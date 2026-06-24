import axios from "axios";

const createApi = (baseURL:any) => {
    const api = axios.create({
        baseURL,
        timeout: 5000,
        withCredentials: true,
    });

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem("ACCESS_TOKEN");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    });

    return api;
};

export const Axios = createApi(
    "https://medinexus-production-ff5c.up.railway.app/api/v1"
);

export const HospitalApi = createApi(
    "https://medinexus-production-ff5c.up.railway.app/api/v1/hospital"
);
