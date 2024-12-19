import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import MainPage from "../MainPage.tsx";
import '@testing-library/jest-dom';
import ActiveCategoryContextComponent from "../../../../shared/context/activeCategoryContext/activeCategoryContextComponent.tsx";
import TaskContextComponent from "../../../../shared/context/tasksContext/taskContextComponent.tsx";
describe('Main', () => {
    render(_jsx(_Fragment, { children: _jsx(ActiveCategoryContextComponent, { children: _jsx(TaskContextComponent, { children: _jsx(MainPage, {}) }) }) }));
    test('renders correctly', () => {
        /** проверка рендера компонентов*/
        expect(screen.getByText('TaskLists')).toBeInTheDocument();
        // expect(screen.getByText('SwitchTasksCategory')).toBeInTheDocument();
    });
});
