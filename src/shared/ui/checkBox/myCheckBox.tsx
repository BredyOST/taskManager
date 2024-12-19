import {
    CheckBoxCycle,
    CheckBoxFormControlLabel,
    CloseSVG,
    CoverMain,
    CustomCheckBox,
    SvgIconChecked,
    TaskLabel,
} from './styled/myChwckboxStyled.ts';
import { ButtonList, TasksType } from '../../types/types.ts';
import { deleteTask, updateTask } from '../../../app/axios/taskApi/taskApi.ts';
import { useTasks } from '../../hooks/useTasks.ts';
import MyButton from '../buttons/myButton.tsx';

interface ITaskListProps {
    task: TasksType;
}

const MyCheckBox = ({ task }: ITaskListProps) => {
    const { refetch } = useTasks();

    const changeStateChecked = async () => {
        try {
            const response: TasksType = await updateTask(task.id, { ...task, completed: !task?.completed });
            if (response?.id) {
                refetch();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteThisTask: () => Promise<void> = async () => {
        try {
            const response: TasksType = await deleteTask(task.id);
            if (response?.id) {
                refetch();
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <CoverMain>
            <CheckBoxFormControlLabel
                control={
                    <CustomCheckBox
                        icon={<CheckBoxCycle />}
                        checkedIcon={
                            <CheckBoxCycle>
                                <SvgIconChecked />
                            </CheckBoxCycle>
                        }
                        checked={task?.completed}
                        onClick={changeStateChecked}
                    />
                }
                label={<TaskLabel $completed={task.completed}>{task.description}</TaskLabel>}
            />
            <MyButton onClick={deleteThisTask} type='button' indicator={ButtonList.deleteTask}>
                <CloseSVG />
            </MyButton>
        </CoverMain>
    );
};

export default MyCheckBox;
