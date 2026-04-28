import axios from "axios";

const Axios = axios.create({
    baseURL: "https://api.example.com",
    timeout: 5000,
    headers: { "X-Custom-Header": "foobar" },
});



Axios.interceptors.request.use((Config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    Config.headers.Authorization = `Bearer ${token}`;
    return Config;
});



Axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            localStorage.removeItem("ACCESS_TOKEN");
        } else if (response.status === 404) {
            //show not found
        }
        throw error;
    }
);


export default Axios;