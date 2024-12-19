import axios, { AxiosError } from 'axios';

/** успешный ответ*/
export interface ApiResponse<T = unknown> {
    data: T;
    message?: string;
    success: boolean;
}

/** ошибка*/
export interface ApiErrorResponse {
    message: string;
    status?: number;
    [key: string]: unknown; // Дополнительные поля, если они есть
}

export const api = axios.create({
    baseURL: 'http://localhost:5001',
    timeout: 5000,
});

const handleApiError = (error: AxiosError<ApiErrorResponse>) => {
    const errorMessage = error.response?.data?.message || 'Произошла ошибка';
    console.error('API Error:', errorMessage);
    return Promise.reject(errorMessage);
};

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiErrorResponse>) => handleApiError(error)
);
