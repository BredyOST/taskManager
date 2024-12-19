import {render} from "@testing-library/react";
import MainPage from "../MainPage.tsx";

jest.mock('../../../../features/taskLists/taskLists.tsx', () => () => <div>TaskLists</div>)
jest.mock('../../../../features/addTask/addTask.tsx', () => () => <div>AddTask</div>)
jest.mock('../../../../features/switchTasksCategory/switchTasksCategory.tsx', () => () => <div>SwitchTasksCategory</div>)

describe('Mainpage', () => {
    test('mathes snapshot', () => {
        const {asFragment} = render(<MainPage/>)
        expect(asFragment()).toMatchSnapshot()
    })
})