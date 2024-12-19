import {fireEvent, render, screen} from "@testing-library/react";
import SwitchTasksCategory from "../switchTasksCategory.tsx";
import ActiveCategoryContextComponent
    from "../../../shared/context/activeCategoryContext/activeCategoryContextComponent.tsx";
import TaskContextComponent from "../../../shared/context/tasksContext/taskContextComponent.tsx";

jest.mock('../../../app/axios/taskApi/taskApi.ts', () => ({
    deleteTask: jest.fn(),
}))

jest.mock('../../../shared/hooks/useTasks.ts', () => ({
    useTasks: () => ({
        refetch: jest.fn()
    })
}))

jest.mock('../../../shared/ui/tabs/myTab.tsx', () => () => (<div>MyTab</div>))


describe('SwitchTasksCategory', () => {

    const mockCategoryContext = { activeCategory: 'all' };
    const mockTaskContext = {
        tasks: {
            all: [{ id: 1, description: 'Test Task 1', completed: true }, { id: 2, description: 'Test Task 2', completed: false }],
            active: [{ id: 2, description: 'Test Task 2', completed: false }],
            completed: [{ id: 1, description: 'Test Task 1', completed: true }],
        },
    };

    test('matches snapshot', () => {
        const {asFragment} = render(
            <ActiveCategoryContextComponent>
                <TaskContextComponent>
                    <SwitchTasksCategory />
                </TaskContextComponent>
            </ActiveCategoryContextComponent>
        );
        expect(asFragment()).toMatchSnapshot()
    })
    const { deleteTask } = require('../../../app/axios/taskApi/taskApi.ts'); // импорт мока функции

    test('renders correct task count based on active category', () => {
        const button = screen.getByRole('button', { name: /clear completed/i });
        fireEvent.click(button);
        expect(deleteTask).toHaveBeenCalledTimes(1);

    })

})
