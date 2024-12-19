import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { HomeContainerDiv, Wrapper } from './app/styles/variable/globalStyled.ts';
import Header from './widgets/header/header.tsx';
import MainPage from './app/pages/main/MainPage.tsx';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Wrapper, { children: _jsx(HomeContainerDiv, { children: _jsx(MainPage, {}) }) })] }));
}
export default App;
