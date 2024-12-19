import React from 'react';
import { InputsList } from '../../types/types.ts';
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'email' | 'tel';
    indicator: InputsList;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
}
declare const MyInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default MyInput;
