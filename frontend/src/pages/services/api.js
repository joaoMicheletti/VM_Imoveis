import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:2222",
    timeout: 1000,
});
export default api;
