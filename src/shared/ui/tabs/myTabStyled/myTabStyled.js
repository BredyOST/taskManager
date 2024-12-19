import styled from 'styled-components';
import { ToggleButton } from '@mui/material';
import { LINE_HEIGHT_MAIN_TEXT, MAIN_SIZE } from "../../../../app/styles/variable/globalConstant.ts";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { adaptiveValue, rem } from "../../../../app/styles/common.ts";
export const ToggleButtonGroupWrap = styled(ToggleButtonGroup) `
    && {
        .css-gn0oko-MuiButtonBase-root-MuiToggleButton-root {
            border: 1px transparent;
            font-size: ${rem(MAIN_SIZE)};
            line-height: ${LINE_HEIGHT_MAIN_TEXT};
            ${({}) => adaptiveValue('font-size', MAIN_SIZE, 14, 3, 1200, 800)};
        }

        .css-gn0oko-MuiButtonBase-root-MuiToggleButton-root.Mui-selected {
            //background-color: rgba(103, 100, 100, 0.08);
            border: 1px solid rgba(0, 0, 0, 0.27);
            background-color: transparent;
        }
    }
`;
export const ToggleButtonItem = styled(ToggleButton) `

`;
