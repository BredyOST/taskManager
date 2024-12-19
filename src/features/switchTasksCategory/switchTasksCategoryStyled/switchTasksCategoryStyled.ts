import styled from 'styled-components';
import { ToggleButtonGroup } from '@mui/material';
import {
    BACKGROUND_COLOR_SECOND,
    LINE_HEIGHT_MAIN_TEXT, MAIN_SIZE
} from '../../../app/styles/variable/globalConstant.ts';
import {adaptiveValue, em, rem} from '../../../app/styles/common.ts';

export const SwitchTasksCategoryWrap = styled(ToggleButtonGroup)`
    
    && {
        border-radius: 0;
    }

    color: #636060;
    background-color: ${BACKGROUND_COLOR_SECOND};
    display: flex;
    column-gap: ${rem(10)};
    justify-content: space-between;
    padding-top: ${rem(10)};
    padding-bottom: ${rem(10)};
    flex: 1 1 auto;
    min-width: 100%;
    padding-left: ${rem(20)};
    padding-right: ${rem(20)};
    align-items: center;
    ${({}) => adaptiveValue('padding-right', 20, 12, 3, 1200, 800)};
    ${({}) => adaptiveValue('padding-left', 20, 12, 3, 1200, 800)};

    @media (max-width: ${em(450)}) {
        display: flex;
        flex-direction: column;
        row-gap: ${rem(10)};
    }
`;

export const SwitchTasksCategoryInfo = styled.div`
    display: flex;
    column-gap: ${rem(5)};
    font-size: ${rem(MAIN_SIZE)};
    line-height: ${LINE_HEIGHT_MAIN_TEXT};
    ${({}) => adaptiveValue('font-size', MAIN_SIZE, 14, 3, 1200, 800)};
`;


export const SwitchTasksCategoryDiv = styled.div``;
