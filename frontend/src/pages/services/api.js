import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:2222",
    timeout: 2000,
    headers: "multipart/form-data"
});
export default api;
