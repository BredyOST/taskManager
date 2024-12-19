import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MyInput from '../../shared/ui/inputs/myInput.tsx';
import { AddTaskWrapDiv, SvgIconArrowDown } from './styled/addtaskStyled.ts';
import { ButtonList, InputsList } from '../../shared/types/types.ts';
import MyButton from '../../shared/ui/buttons/myButton.tsx';
import React from 'react';
import { useTasks } from '../../shared/hooks/useTasks.ts';
import { addNewTask } from "../../shared/utils/functions.ts";
const AddTask = React.memo(({ openList, showListsTasks }) => {
    const [valueInp, setValueInp] = React.useState('');
    const refInput = React.useRef(null);
    const { refetch } = useTasks();
    const addTextFromInput = React.useCallback((e) => {
        setValueInp(e.target.value);
    }, [valueInp]);
    const handleAddTask = React.useCallback(async (e) => {
        if (('key' in e && e?.key === 'Enter' || e?.type == 'click') && valueInp.length > 1) {
            await addNewTask(e, valueInp, refetch, setValueInp);
        }
    }, [valueInp, refetch]);
    return (_jsxs(AddTaskWrapDiv, { children: [_jsx(MyButton, { indicator: ButtonList.iconBtnSvh, onClick: showListsTasks, type: 'button', children: _jsx(SvgIconArrowDown, { "$active": openList }) }), _jsx(MyInput, { type: 'text', placeholder: 'ENTER TASK', indicator: InputsList.addTask, value: valueInp, onChange: (e) => addTextFromInput(e), onKeyDown: (e) => handleAddTask(e), ref: refInput }), _jsx(MyButton, { indicator: ButtonList.addTask, onClick: (e) => handleAddTask(e), type: 'button', children: "add" })] }));
});
export default AddTask;
