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
    [key: string]: unknown;
}
export declare const api: import("axios").AxiosInstance;
