import styled from 'styled-components';
import { em, rem } from '../../../../app/styles/common.ts';
import { TextField } from '@mui/material';
import { MOBILE } from "../../../../app/styles/variable/globalConstant.ts";
export const InputFilterHome = styled(TextField) `
    background-color: #ffffff;
    flex: 0 1 100%;

    .MuiFormControl-root {
        display: flex;
        flex: 1 1 auto;
    }

    .MuiTextField-root {
    }

    .MuiInputBase-root {
    }

    .MuiFormLabel-root {
        font-size: ${rem(14)};
    }

    .MuiInputBase-input {
        font-size: ${rem(14)};
        padding-left: ${rem(70)};
        padding-top: ${rem(20)};
        padding-bottom: ${rem(20)};
        padding-right: ${rem(10)};
        
        @media (max-width: ${em(MOBILE)}) {
            padding-top: ${rem(10)};
            padding-bottom: ${rem(10)};    
        }
        
    }
`;
export const InputWrapperDiv = styled.div `
    display: flex;
    flex: 1 1 auto;
`;
