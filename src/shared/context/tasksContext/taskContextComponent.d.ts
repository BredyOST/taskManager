import React from 'react';
import { TasksType } from '../../types/types.ts';
interface ITasksContext {
    children: React.ReactNode;
}
/** тип для тасок, используемых в контексте*/
export type TaskContextType = {
    all: TasksType[] | [];
    active: TasksType[] | [];
    completed: TasksType[] | [];
};
declare const TaskContextComponent: ({ children }: ITasksContext) => import("react/jsx-runtime").JSX.Element;
export default TaskContextComponent;
