import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckBoxCycle, CheckBoxFormControlLabel, CloseSVG, CoverMain, CustomCheckBox, SvgIconChecked, TaskLabel, } from './styled/myChwckboxStyled.ts';
import { ButtonList } from '../../types/types.ts';
import { deleteTask, updateTask } from '../../../app/axios/taskApi/taskApi.ts';
import { useTasks } from '../../hooks/useTasks.ts';
import MyButton from '../buttons/myButton.tsx';
const MyCheckBox = ({ task }) => {
    const { refetch } = useTasks();
    const changeStateChecked = async () => {
        try {
            const response = await updateTask(task.id, { ...task, completed: !task?.completed });
            if (response?.id) {
                refetch();
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    const deleteThisTask = async () => {
        try {
            const response = await deleteTask(task.id);
            if (response?.id) {
                refetch();
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    return (_jsxs(CoverMain, { children: [_jsx(CheckBoxFormControlLabel, { control: _jsx(CustomCheckBox, { icon: _jsx(CheckBoxCycle, {}), checkedIcon: _jsx(CheckBoxCycle, { children: _jsx(SvgIconChecked, {}) }), checked: task?.completed, onClick: changeStateChecked }), label: _jsx(TaskLabel, { "$completed": task.completed, children: task.description }) }), _jsx(MyButton, { onClick: deleteThisTask, type: 'button', indicator: ButtonList.deleteTask, children: _jsx(CloseSVG, {}) })] }));
};
export default MyCheckBox;
