import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    timeout: 5000,
    headers: { "X-Custom-Header": "foobar" },
    withCredentials: true,
});



// Axios.interceptors.request.use((Config) => {
//     const token = localStorage.getItem("ACCESS_TOKEN");
//     Config.headers.Authorization = `Bearer ${token}`;
//     return Config;
// });



Axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            // localStorage.removeItem("ACCESS_TOKEN");
            return response

        } else if (response.status === 422) {
            return response
        }
        throw error;
    }
);


export default Axios;