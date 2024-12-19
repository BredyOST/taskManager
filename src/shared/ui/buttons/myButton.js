import { jsx as _jsx } from "react/jsx-runtime";
import { BtnAddTask, BtnAddTasks, BtnDeleteTask, BtnDeleteTasks } from './styled/myuttonStyled.ts';
import { ButtonList } from '../../types/types.ts';
const MyButton = ({ children, indicator, onClick, type }) => {
    if (indicator === ButtonList.iconBtnSvh) {
        return (_jsx(BtnAddTask, { type: type, onClick: onClick, children: children }));
    }
    if (indicator === ButtonList.deleteTask) {
        return (_jsx(BtnDeleteTask, { type: type, onClick: onClick, children: children }));
    }
    if (indicator === ButtonList.deleteTasks) {
        return (_jsx(BtnDeleteTasks, { type: type, onClick: onClick, children: children }));
    }
    if (indicator === ButtonList.addTask) {
        return (_jsx(BtnAddTasks, { type: type, onClick: onClick, children: children }));
    }
    return null;
};
export default MyButton;
