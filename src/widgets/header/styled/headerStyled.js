import styled from 'styled-components';
import { rem } from '../../../app/styles/common.ts';
import { FONT_SIZE_LOGO, FONT_WEIGHT_LOGO, LINE_HEIGHT_MAIN_TEXT } from '../../../app/styles/variable/globalConstant.ts';
export const HeaderWrapDiv = styled.div `
    display: flex;
    justify-content: center;
`;
export const HeaderLogoTitle = styled.h3 `
    min-height: ${rem(35)};
    font-size: ${rem(FONT_SIZE_LOGO)};
    font-weight: ${FONT_WEIGHT_LOGO};
    line-height: ${LINE_HEIGHT_MAIN_TEXT};
    color: rgba(154, 120, 69, 0.6);
`;
