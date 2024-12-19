import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { InputFilterHome, InputWrapperDiv } from './styled/myInputStyled.ts';
import { InputsList } from '../../types/types.ts';
const MyInput = React.forwardRef(({ type, indicator, placeholder, onChange, value, onKeyDown }, ref) => {
    /** инпут ввода задачи */
    if (indicator === InputsList?.addTask) {
        return (_jsx(InputWrapperDiv, { children: _jsx(InputFilterHome, { variant: 'standard', type: type, placeholder: placeholder, onChange: onChange, value: value, ref: ref, onKeyDown: onKeyDown }) }));
    }
    return null;
});
export default MyInput;
