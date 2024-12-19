import { ForFunc, TasksType } from '../../../shared/types/types.ts';
export declare const getTasks: () => Promise<TasksType[]>;
export declare const addTask: ForFunc<Pick<TasksType, 'description' | 'completed'>, Promise<TasksType>>;
export declare const deleteTask: ForFunc<string | number, Promise<TasksType>>;
export declare const updateTask: (id: string | number, data: Partial<TasksType>) => Promise<TasksType>;
