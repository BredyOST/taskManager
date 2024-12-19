import { TasksType } from '../../types/types.ts';
interface ITaskListProps {
    task: TasksType;
}
declare const MyCheckBox: ({ task }: ITaskListProps) => import("react/jsx-runtime").JSX.Element;
export default MyCheckBox;
