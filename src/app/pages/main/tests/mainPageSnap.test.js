import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import MainPage from "../MainPage.tsx";
jest.mock('../../../../features/taskLists/taskLists.tsx', () => () => _jsx("div", { children: "TaskLists" }));
jest.mock('../../../../features/addTask/addTask.tsx', () => () => _jsx("div", { children: "AddTask" }));
jest.mock('../../../../features/switchTasksCategory/switchTasksCategory.tsx', () => () => _jsx("div", { children: "SwitchTasksCategory" }));
describe('Mainpage', () => {
    test('mathes snapshot', () => {
        const { asFragment } = render(_jsx(MainPage, {}));
        expect(asFragment()).toMatchSnapshot();
    });
});
