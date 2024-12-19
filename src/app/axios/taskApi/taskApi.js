import { api } from '../axiosInstance.ts';
export const getTasks = async () => {
    const response = await api.get('/tasks');
    return response.data;
};
export const addTask = async (task) => {
    const response = await api.post('/tasks', task);
    return response.data;
};
export const deleteTask = async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
};
export const updateTask = async (id, data) => {
    const response = await api.patch(`/tasks/${id}`, data);
    return response.data;
};
