import { HeaderLogoTitle, HeaderWrapDiv } from './styled/headerStyled.ts';
import { LOGO } from '../../index.const.ts';

const Header = () => {

    return (
        <HeaderWrapDiv>
            <HeaderLogoTitle>{LOGO}</HeaderLogoTitle>
        </HeaderWrapDiv>
    );
};

export default Header;
