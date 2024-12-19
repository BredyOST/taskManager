import styled from 'styled-components';
import { BACKGROUND_COLOR_SECOND } from '../../../app/styles/variable/globalConstant.ts';
export const TaskListWrapped = styled.div `
    display: flex;
    background-color: ${BACKGROUND_COLOR_SECOND};
    flex-direction: column;
    max-height: ${(props) => (props.$openList ? '600px' : '0')};
    opacity: ${(props) => (props.$openList ? '1' : '0')};
    overflow: auto;
    transition:
        max-height ease 0.3s 0s,
        opacity ease 0.3s 0s;
`;
