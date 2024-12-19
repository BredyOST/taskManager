import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://localhost:5001',
    timeout: 5000,
});
const handleApiError = (error) => {
    const errorMessage = error.response?.data?.message || 'Произошла ошибка';
    console.error('API Error:', errorMessage);
    return Promise.reject(errorMessage);
};
api.interceptors.response.use((response) => response, (error) => handleApiError(error));
