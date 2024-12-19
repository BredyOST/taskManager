import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, render } from "@testing-library/react";
import AddTask from "../addTask.tsx";
jest.mock('../../../app/axios/taskApi/taskApi.ts', () => ({
    addTask: jest.fn()
}));
jest.mock('../../../shared/hooks/useTasks.ts', () => ({
    useTasks: () => ({
        refetch: jest.fn(),
    })
}));
jest.mock('../../../app/assets/svg/arrowDown.svg', () => 'svg');
describe('addTasks', () => {
    test('match snapShoot', () => {
        const { asFragment } = render(_jsx(AddTask, { openList: true, showListsTasks: () => { } }));
        expect(asFragment()).toMatchSnapshot();
    });
    test('handles task input and submit', () => {
        const { getByPlaceholderText } = render(_jsx(AddTask, { openList: true, showListsTasks: () => { } }));
        const input = getByPlaceholderText('ENTER TASK');
        // Имитация ввода текста в поле
        fireEvent.change(input, { target: { value: "new task" } });
        expect(input.value).toBe('new task');
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
        const { addTask } = require('../../../app/axios/taskApi/taskApi.ts');
        expect(addTask).toHaveBeenCalledTimes(1);
        expect(addTask).toHaveBeenCalledWith({ description: 'new task', completed: false });
    });
});
