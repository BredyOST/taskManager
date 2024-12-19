import React from 'react';
import { InputFilterHome, InputWrapperDiv } from './styled/myInputStyled.ts';
import { InputsList } from '../../types/types.ts';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'email' | 'tel';
    indicator: InputsList;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
}

const MyInput = React.forwardRef<HTMLInputElement, InputProps>(({ type, indicator, placeholder, onChange, value, onKeyDown }, ref) => {
    /** инпут ввода задачи */
    if (indicator === InputsList?.addTask) {
        return (
            <InputWrapperDiv>
                <InputFilterHome
                    variant='standard'
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    onKeyDown={onKeyDown}
                />
            </InputWrapperDiv>
        );
    }

    return null;
});

export default MyInput;
