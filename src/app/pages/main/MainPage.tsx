import { HomeCoverDiv, HomeWrapDiv } from './styled/mainStyled.ts';
import AddTask from '../../../features/addTask/addTask.tsx';
import TaskLists from '../../../features/taskLists/taskLists.tsx';
import SwitchTasksCategory from '../../../features/switchTasksCategory/switchTasksCategory.tsx';
import React from 'react';
import { ForFunc } from '../../../shared/types/types.ts';

const MainPage = () => {
    const [openList, setOpenList] = React.useState<boolean>(true);

    const showListsTasks: ForFunc<void, void> = React.useCallback(() => {
        setOpenList((prev) => !prev);
    },[openList]);

    return (
        <HomeWrapDiv>
            <HomeCoverDiv>
                <AddTask openList={openList} showListsTasks={showListsTasks} />
                <TaskLists openList={openList} />
                <SwitchTasksCategory />
            </HomeCoverDiv>
        </HomeWrapDiv>
    );
};

export default MainPage;
