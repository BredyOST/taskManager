import React from 'react';
import {BtnAddTask, BtnAddTasks, BtnDeleteTask, BtnDeleteTasks} from './styled/myuttonStyled.ts';
import { ButtonList } from '../../types/types.ts';

interface IMyButton extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    indicator: ButtonList;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    type: 'button' | 'submit' | 'reset';
}

const MyButton = ({ children, indicator, onClick, type }: IMyButton) => {
    if (indicator === ButtonList.iconBtnSvh) {
        return (
            <BtnAddTask type={type} onClick={onClick}>
                {children}
            </BtnAddTask>
        );
    }
    if (indicator === ButtonList.deleteTask) {
        return (
            <BtnDeleteTask type={type} onClick={onClick}>
                {children}
            </BtnDeleteTask>
        );
    }

    if (indicator === ButtonList.deleteTasks) {
        return (
            <BtnDeleteTasks type={type} onClick={onClick}>
                {children}
            </BtnDeleteTasks>
        );
    }

    if (indicator === ButtonList.addTask) {
        return (
            <BtnAddTasks type={type} onClick={onClick}>
                {children}
            </BtnAddTasks>
        );
    }
    return null;
};

export default MyButton;
