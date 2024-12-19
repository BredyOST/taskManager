import React from 'react';
import { ForFunc, TasksType } from '../../types/types.ts';
import { TasksContext } from './tasksContext.ts';

interface ITasksContext {
    children: React.ReactNode;
}

/** тип для тасок, используемых в контексте*/
export type TaskContextType = {
    all: TasksType[] | [];
    active: TasksType[] | [];
    completed: TasksType[] | [];
};

const TaskContextComponent = ({ children }: ITasksContext) => {
    const [tasks, setTasks] = React.useState<TaskContextType>({
        all: [],
        active: [],
        completed: [],
    });

    const addTasks: ForFunc<TaskContextType, void> = (allTasks) => {
        setTasks({ ...allTasks });
    };

    return <TasksContext.Provider value={{ tasks: tasks, addTasks }}>{children}</TasksContext.Provider>;
};

export default TaskContextComponent;
