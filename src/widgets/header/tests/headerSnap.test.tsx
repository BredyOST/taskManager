import {render} from "@testing-library/react";
import Header from "../header.tsx";


describe('header', () => {
    test('matches snapshot', () => {
        const {asFragment} = render(<Header />)
        expect(asFragment()).toMatchSnapshot()
    })
})