import styled from 'styled-components';
import { rem } from '../../../app/styles/common.ts';
import SvgIconArrow from '../../../app/assets/svg/arrowDown.svg';

export const AddTaskWrapDiv = styled.div`
    display: flex;
    flex: 1 1 auto;
    position: relative;
`;

export const SvgIconArrowDown = styled(SvgIconArrow)<{ $active: boolean }>`
    width: ${rem(20)};
    height: ${rem(20)};
    fill: #a39595;
    transform: ${(props) => (props.$active ? 'rotate(0deg)' : 'rotate(-90deg)')};
    transition: transform ease 0.3s 0s;
`;
