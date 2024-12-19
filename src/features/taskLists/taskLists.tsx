import { TaskListWrapped } from './styled/taskListsStyled.ts';
import MyCheckBox from '../../shared/ui/checkBox/myCheckBox.tsx';
import { ButtonSwitchList, TasksType } from '../../shared/types/types.ts';
import React from 'react';
import {TasksContext} from "../../shared/context/tasksContext/tasksContext.ts";
import {CategoryContext} from "../../shared/context/activeCategoryContext/activeCategoryContext.tsx";

interface ITaskListProps {
    openList: boolean;
}

const TaskLists = React.memo(({ openList }: ITaskListProps) => {
    const context = React.useContext(CategoryContext);
    const taskContext = React.useContext(TasksContext);

    return (
        <TaskListWrapped $openList={openList}>
            {context?.activeCategory == ButtonSwitchList.all &&
                taskContext?.tasks?.all?.map((item: TasksType) => <MyCheckBox key={item.id} task={item} />)}
            {context?.activeCategory == ButtonSwitchList.active &&
                taskContext?.tasks?.active?.map((item: TasksType) => <MyCheckBox key={item.id} task={item} />)}
            {context?.activeCategory == ButtonSwitchList.completed &&
                taskContext?.tasks?.completed?.map((item: TasksType) => <MyCheckBox key={item.id} task={item} />)}
        </TaskListWrapped>
    );
});

export default TaskLists;
