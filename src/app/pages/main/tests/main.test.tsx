import {render, screen} from "@testing-library/react";
import MainPage from "../MainPage.tsx";
import '@testing-library/jest-dom';
import ActiveCategoryContextComponent
    from "../../../../shared/context/activeCategoryContext/activeCategoryContextComponent.tsx";
import TaskContextComponent from "../../../../shared/context/tasksContext/taskContextComponent.tsx";


describe('Main', () => {
    render(
        <>
        <ActiveCategoryContextComponent>
            <TaskContextComponent>
                <MainPage />
            </TaskContextComponent>
        </ActiveCategoryContextComponent>
        </>
    )
    test('renders correctly', () => {

        /** проверка рендера компонентов*/
        expect(screen.getByText('TaskLists')).toBeInTheDocument();
        // expect(screen.getByText('SwitchTasksCategory')).toBeInTheDocument();
    })
})