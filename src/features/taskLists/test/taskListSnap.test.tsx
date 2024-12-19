import {render} from "@testing-library/react";
import TaskLists from "../taskLists.tsx";


describe('TaskListSnap', () => {
    test('matches snapshot', () => {
        const {asFragment} = render(<TaskLists openList={true}/>)
        expect(asFragment()).toMatchSnapshot()
    })
})