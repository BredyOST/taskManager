import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TaskListWrapped } from './styled/taskListsStyled.ts';
import MyCheckBox from '../../shared/ui/checkBox/myCheckBox.tsx';
import { ButtonSwitchList } from '../../shared/types/types.ts';
import React from 'react';
import { TasksContext } from "../../shared/context/tasksContext/tasksContext.ts";
import { CategoryContext } from "../../shared/context/activeCategoryContext/activeCategoryContext.tsx";
const TaskLists = React.memo(({ openList }) => {
    const context = React.useContext(CategoryContext);
    const taskContext = React.useContext(TasksContext);
    return (_jsxs(TaskListWrapped, { "$openList": openList, children: [context?.activeCategory == ButtonSwitchList.all &&
                taskContext?.tasks?.all?.map((item) => _jsx(MyCheckBox, { task: item }, item.id)), context?.activeCategory == ButtonSwitchList.active &&
                taskContext?.tasks?.active?.map((item) => _jsx(MyCheckBox, { task: item }, item.id)), context?.activeCategory == ButtonSwitchList.completed &&
                taskContext?.tasks?.completed?.map((item) => _jsx(MyCheckBox, { task: item }, item.id))] }));
});
export default TaskLists;
