import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { TasksContext } from './tasksContext.ts';
const TaskContextComponent = ({ children }) => {
    const [tasks, setTasks] = React.useState({
        all: [],
        active: [],
        completed: [],
    });
    const addTasks = (allTasks) => {
        setTasks({ ...allTasks });
    };
    return _jsx(TasksContext.Provider, { value: { tasks: tasks, addTasks }, children: children });
};
export default TaskContextComponent;
