import React, { useEffect, useState } from 'react';
import { TasksType } from '../types/types.ts';
import { getTasks } from '../../app/axios/taskApi/taskApi.ts';
import { TaskContextType } from '../context/tasksContext/taskContextComponent.tsx';
import { TasksContext } from '../context/tasksContext/tasksContext.ts';

export const useTasks = () => {
    const [error, setError] = useState<Error | null>(null);
    const taskContext = React.useContext(TasksContext);

    const getAllTasks:() => Promise<void> = async () => {
        try {
            const result: TasksType[] = await getTasks();
            if (result?.length >= 1) {
                const active = result.filter((item) => !item.completed);
                const completed = result.filter((item) => item.completed);
                const obj: TaskContextType = { all: result, active: active, completed: completed };
                taskContext?.addTasks(obj);
            } else {
                const obj: TaskContextType = { all: [], active: [], completed: [] };
                taskContext?.addTasks(obj);
            }
        } catch (err) {
            setError(err as Error);
            console.log(err);
        }
    };

    useEffect(() => {
        getAllTasks();
    }, []);

    return { error, refetch: getAllTasks };
};
