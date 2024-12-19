import styled from 'styled-components';
import { Checkbox, FormControlLabel } from '@mui/material';
import SvgChecked from './../../../../app/assets/svg/checked.svg';
import {adaptiveValue, rem} from '../../../../app/styles/common.ts';
import SvgClose from './../../../../app/assets/svg/close.svg';
import {LINE_HEIGHT_MAIN_TEXT, MAIN_SIZE} from "../../../../app/styles/variable/globalConstant.ts";

export const CoverMain = styled.div`
    display: flex;
    min-width: 100%;
    flex: 1 1 auto;
    position: relative;
    border-bottom: ${rem(2)} solid #e8e6e6;
`;

export const CheckBoxFormControlLabel = styled(FormControlLabel)`

    //min-width: 100%;
    flex: 1 1 auto;
    && {
        margin-left: 0;
        margin-right: 0;
    }

    &&:hover {
        background-color: #e6e6ed;
    }
`;

export const TaskLabel = styled.span<{ $completed: boolean }>`
    text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
    font-size: ${rem(MAIN_SIZE)};
    font-weight: 400;
    line-height: ${LINE_HEIGHT_MAIN_TEXT};
    ${({}) => adaptiveValue('font-size', MAIN_SIZE, 12, 3, 1200, 800)};
`;

export const CustomCheckBox = styled(Checkbox)``;

export const SvgIconChecked = styled(SvgChecked)`
    fill: #20592b;
    width: 100%;
    height: 100%;
`;

export const CheckBoxCycle = styled.div`
    border-radius: 50%;
    width: ${rem(30)};
    height: ${rem(30)};
    border: ${rem(2)} solid rgba(0, 0, 0, 0.13);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CloseSVG = styled(SvgClose)`
    && {
        fill: #000000;
        width: ${rem(30)};
        height: ${rem(30)};
    }

    @media (any-hover: hover) {
        &:hover {
            fill: #713434;
        }
    }
`;
