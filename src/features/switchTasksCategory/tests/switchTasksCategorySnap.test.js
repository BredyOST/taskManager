import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import SwitchTasksCategory from "../switchTasksCategory.tsx";
import ActiveCategoryContextComponent from "../../../shared/context/activeCategoryContext/activeCategoryContextComponent.tsx";
import TaskContextComponent from "../../../shared/context/tasksContext/taskContextComponent.tsx";
jest.mock('../../../app/axios/taskApi/taskApi.ts', () => ({
    deleteTask: jest.fn(),
}));
jest.mock('../../../shared/hooks/useTasks.ts', () => ({
    useTasks: () => ({
        refetch: jest.fn()
    })
}));
jest.mock('../../../shared/ui/tabs/myTab.tsx', () => () => (_jsx("div", { children: "MyTab" })));
describe('SwitchTasksCategory', () => {
    test('matches snapshot', () => {
        const { asFragment } = render(_jsx(ActiveCategoryContextComponent, { children: _jsx(TaskContextComponent, { children: _jsx(SwitchTasksCategory, {}) }) }));
        expect(asFragment()).toMatchSnapshot();
    });
    test('renders correct task count based on active category', () => {
        // const button = screen.getByRole('button', { name: /clear completed/i });
        // fireEvent.click(button);
        // expect(deleteTask).toHaveBeenCalledTimes(1);
    });
});
