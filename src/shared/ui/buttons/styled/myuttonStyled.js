import styled from 'styled-components';
import LoadingButton from '@mui/lab/LoadingButton';
import { em, rem } from "../../../../app/styles/common.ts";
import { MOBILE } from "../../../../app/styles/variable/globalConstant.ts";
export const BtnAddTask = styled(LoadingButton) `
    && {
        cursor: pointer;
        position: absolute;
        top: 50%;
        z-index: 10;
        transform: translateY(-50%);
        height: 100%;
        padding-left: ${rem(0)};
        padding-right: ${rem(0)};
    }

    &:hover {
        background: #d6e2ec;
    }
`;
export const BtnDeleteTask = styled(LoadingButton) `
    
    && {
        cursor: pointer;
        z-index: 10;
        display: none;
        @media(min-width: ${em(MOBILE)}) {
            padding-top: ${rem(0)};
            padding-bottom: ${rem(0)};
            padding-left: ${rem(0)};
            padding-right: ${rem(0)};
            display: block;
        }
    }
`;
export const BtnDeleteTasks = styled(LoadingButton) `
    
    && {
        cursor: pointer;
        z-index: 10;
        text-transform: lowercase;
        @media(min-width: ${em(MOBILE)}) {
            padding-top: ${rem(0)};
            padding-bottom: ${rem(0)};
            padding-left: ${rem(0)};
            padding-right: ${rem(0)};
            display: block;
        }
    }
`;
export const BtnAddTasks = styled(LoadingButton) `

    && {
        outline: ${rem(1)} #bcbaba;
        border-bottom: ${rem(1)} solid #bcbaba;
        cursor: pointer;
        z-index: 10;
        text-transform: lowercase;
        @media (min-width: ${em(MOBILE)}) {
            padding-top: ${rem(0)};
            padding-bottom: ${rem(0)};
            padding-left: ${rem(0)};
            padding-right: ${rem(0)};
            display: block;
        }
    }
`;
