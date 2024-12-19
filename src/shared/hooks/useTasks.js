import React, { useEffect, useState } from 'react';
import { getTasks } from '../../app/axios/taskApi/taskApi.ts';
import { TasksContext } from '../context/tasksContext/tasksContext.ts';
export const useTasks = () => {
    const [error, setError] = useState(null);
    const taskContext = React.useContext(TasksContext);
    const getAllTasks = async () => {
        try {
            const result = await getTasks();
            if (result?.length >= 1) {
                const active = result.filter((item) => !item.completed);
                const completed = result.filter((item) => item.completed);
                const obj = { all: result, active: active, completed: completed };
                taskContext?.addTasks(obj);
            }
            else {
                const obj = { all: [], active: [], completed: [] };
                taskContext?.addTasks(obj);
            }
        }
        catch (err) {
            setError(err);
            console.log(err);
        }
    };
    useEffect(() => {
        getAllTasks();
    }, []);
    return { error, refetch: getAllTasks };
};
