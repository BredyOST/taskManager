import { ForFunc, TasksType } from '../../../shared/types/types.ts';
import { api } from '../axiosInstance.ts';

export const getTasks = async (): Promise<TasksType[]> => {
    const response = await api.get<TasksType[]>('/tasks');
    return response.data;
};

export const addTask: ForFunc<Pick<TasksType, 'description' | 'completed'>, Promise<TasksType>> = async (task) => {
    const response = await api.post<TasksType>('/tasks', task);
    return response.data;
};

export const deleteTask: ForFunc<string | number, Promise<TasksType>> = async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
};

export const updateTask = async (id: string | number, data: Partial<TasksType>): Promise<TasksType> => {
    const response = await api.patch<TasksType>(`/tasks/${id}`, data);
    return response.data;
};
