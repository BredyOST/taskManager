import { jsx as _jsx } from "react/jsx-runtime";
import { HeaderLogoTitle, HeaderWrapDiv } from './styled/headerStyled.ts';
import { LOGO } from '../../index.const.ts';
const Header = () => {
    return (_jsx(HeaderWrapDiv, { children: _jsx(HeaderLogoTitle, { children: LOGO }) }));
};
export default Header;
