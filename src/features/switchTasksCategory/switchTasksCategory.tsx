import React from 'react';
import {
    SwitchTasksCategoryDiv,
    SwitchTasksCategoryInfo,
    SwitchTasksCategoryWrap,
} from './switchTasksCategoryStyled/switchTasksCategoryStyled.ts';
import MyTab from '../../shared/ui/tabs/myTab.tsx';
import {ButtonList, ButtonSwitchList, TasksType} from '../../shared/types/types.ts';
import {CategoryContext} from "../../shared/context/activeCategoryContext/activeCategoryContext.tsx";
import {TasksContext} from "../../shared/context/tasksContext/tasksContext.ts";
import MyButton from "../../shared/ui/buttons/myButton.tsx";
import {deleteTask} from "../../app/axios/taskApi/taskApi.ts";
import {useTasks} from "../../shared/hooks/useTasks.ts";

const SwitchTasksCategory = React.memo(() => {
    const context = React.useContext(CategoryContext);
    const taskContext = React.useContext(TasksContext);
    const { refetch } = useTasks();

    const tasksCount: Record<ButtonSwitchList, number> = {
        [ButtonSwitchList.all]: taskContext?.tasks?.all?.length || 0,
        [ButtonSwitchList.active]: taskContext?.tasks?.active?.length || 0,
        [ButtonSwitchList.completed]: taskContext?.tasks?.completed?.length || 0,
    };

    const count = tasksCount[context?.activeCategory || ButtonSwitchList.all] || 0;

    const deleteAllCompletedTasks = React.useCallback(() => {
        taskContext?.tasks?.all?.forEach(async (item: TasksType) => {
            if(item.completed) {
               await deleteTask(item.id)
            }
        })
        refetch()
    },[refetch, taskContext])

    return (
        <SwitchTasksCategoryWrap>
            <SwitchTasksCategoryInfo>
                <SwitchTasksCategoryDiv>{count}</SwitchTasksCategoryDiv>
                <SwitchTasksCategoryDiv>items</SwitchTasksCategoryDiv>
            </SwitchTasksCategoryInfo>
            <MyTab />
            <MyButton
                type="button"
                onClick={deleteAllCompletedTasks}
                indicator={ButtonList.deleteTasks}
            >clear completed</MyButton>
        </SwitchTasksCategoryWrap>
    );
});

export default SwitchTasksCategory;
