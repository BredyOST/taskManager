import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import TaskLists from "../taskLists.tsx";
describe('TaskListSnap', () => {
    test('matches snapshot', () => {
        const { asFragment } = render(_jsx(TaskLists, { openList: true }));
        expect(asFragment()).toMatchSnapshot();
    });
});
