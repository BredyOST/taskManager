import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import Header from "../header.tsx";
describe('header', () => {
    test('matches snapshot', () => {
        const { asFragment } = render(_jsx(Header, {}));
        expect(asFragment()).toMatchSnapshot();
    });
});
