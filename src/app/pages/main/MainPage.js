import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HomeCoverDiv, HomeWrapDiv } from './styled/mainStyled.ts';
import AddTask from '../../../features/addTask/addTask.tsx';
import TaskLists from '../../../features/taskLists/taskLists.tsx';
import SwitchTasksCategory from '../../../features/switchTasksCategory/switchTasksCategory.tsx';
import React from 'react';
const MainPage = () => {
    const [openList, setOpenList] = React.useState(true);
    const showListsTasks = React.useCallback(() => {
        setOpenList((prev) => !prev);
    }, [openList]);
    return (_jsx(HomeWrapDiv, { children: _jsxs(HomeCoverDiv, { children: [_jsx(AddTask, { openList: openList, showListsTasks: showListsTasks }), _jsx(TaskLists, { openList: openList }), _jsx(SwitchTasksCategory, {})] }) }));
};
export default MainPage;
