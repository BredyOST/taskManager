import MyInput from '../../shared/ui/inputs/myInput.tsx';
import { AddTaskWrapDiv, SvgIconArrowDown } from './styled/addtaskStyled.ts';
import { ButtonList, ForFunc, InputsList } from '../../shared/types/types.ts';
import MyButton from '../../shared/ui/buttons/myButton.tsx';
import React from 'react';
import { useTasks } from '../../shared/hooks/useTasks.ts';
import {addNewTask} from "../../shared/utils/functions.ts";

interface IAddTaskProps {
    openList: boolean;
    showListsTasks: () => void;
}

const AddTask = React.memo(({ openList, showListsTasks }: IAddTaskProps) => {
    const [valueInp, setValueInp] = React.useState<string>('');
    const refInput = React.useRef<HTMLInputElement>(null);
    const { refetch } = useTasks();

    const addTextFromInput: ForFunc<React.ChangeEvent<HTMLInputElement>, void> = React.useCallback((e) => {
        setValueInp(e.target.value);
    }, [valueInp]);

    const handleAddTask = React.useCallback(
        async (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
            if (('key' in e && e?.key === 'Enter' || e?.type == 'click') && valueInp.length > 1) {
                await addNewTask(e, valueInp, refetch, setValueInp);
            }
        },
        [valueInp, refetch]
    );

    return (
        <AddTaskWrapDiv>
            <MyButton indicator={ButtonList.iconBtnSvh} onClick={showListsTasks} type='button'>
                <SvgIconArrowDown $active={openList} />
            </MyButton>
            <MyInput
                type='text'
                placeholder='ENTER TASK'
                indicator={InputsList.addTask}
                value={valueInp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => addTextFromInput(e)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleAddTask(e)}
                ref={refInput}
            />
            <MyButton indicator={ButtonList.addTask} onClick={(e:React.MouseEvent<HTMLButtonElement>) => handleAddTask(e)} type='button'>add</MyButton>
        </AddTaskWrapDiv>
    );
})

export default AddTask;
