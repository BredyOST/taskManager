import React from 'react';
import { ButtonList } from '../../types/types.ts';
interface IMyButton extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    indicator: ButtonList;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    type: 'button' | 'submit' | 'reset';
}
declare const MyButton: ({ children, indicator, onClick, type }: IMyButton) => import("react/jsx-runtime").JSX.Element | null;
export default MyButton;
