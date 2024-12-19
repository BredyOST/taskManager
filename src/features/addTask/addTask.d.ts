import React from 'react';
interface IAddTaskProps {
    openList: boolean;
    showListsTasks: () => void;
}
declare const AddTask: React.MemoExoticComponent<({ openList, showListsTasks }: IAddTaskProps) => import("react/jsx-runtime").JSX.Element>;
export default AddTask;
