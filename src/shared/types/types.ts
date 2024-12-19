/** для инпутов*/
export enum InputsList {
    'addTask' = 'addTask',
}

/** для кнопок*/
export enum ButtonList {
    'addTask'='addTask',
    'iconBtnSvh' = 'iconBtnSvh',
    'deleteTask' = 'deleteTask',
    'deleteTasks' = 'deleteTasks',
}

/** для отображения кнопок категорий задач
 * @all - все задачи
 * @active - активные задачи
 * @completed - завершенные задачи
 * */
export enum ButtonSwitchList {
    'all' = 'all',
    'active' = 'active',
    'completed' = 'completed',
}

/** для отрисовки кнопок переключения задач*/
export interface SwitchButtons {
    id: number;
    label: ButtonSwitchList;
}

/** типы для функций*/
export type ForFunc<T, U> = (arg: T) => U;
export type ForFuncThree<T, U, R> = (arg1: T, arg2: U) => R;

/** тип для задачи*/
export interface TasksType {
    id: number;
    description: string;
    completed: boolean;
}
