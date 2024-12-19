import React from 'react';
import { TaskContextType } from './taskContextComponent.tsx';

interface TaskContextProps {
    tasks: TaskContextType;
    addTasks: (allTasks: TaskContextType) => void;
}

export const TasksContext = React.createContext<TaskContextProps | null>(null);
