import React from 'react';
import { TaskContextType } from './taskContextComponent.tsx';
interface TaskContextProps {
    tasks: TaskContextType;
    addTasks: (allTasks: TaskContextType) => void;
}
export declare const TasksContext: React.Context<TaskContextProps | null>;
export {};
