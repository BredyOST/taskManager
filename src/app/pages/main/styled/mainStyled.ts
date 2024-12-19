import styled from 'styled-components';
import { rem } from '../../../styles/common.ts';

export const HomeWrapDiv = styled.div`
    display: flex;
    align-items: center;
    padding-top: ${rem(25)};
    justify-content: center;
`;

export const HomeCoverDiv = styled.div`
    display: flex;
    flex-direction: column;
     max-width: ${rem(1100)};
    width: 100%;
    position: relative;
    box-shadow: ${rem(0)} ${rem(0)} ${rem(10)} ${rem(3)} rgba(0, 0, 0, 0.34);
`;
