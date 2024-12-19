import React from 'react';
import { ToggleButtonGroupWrap, ToggleButtonItem } from './myTabStyled/myTabStyled.ts';
import { CATEGORY_LISTS_BUTTON } from '../../../index.const.ts';
import { SwitchButtons } from '../../types/types.ts';
import {CategoryContext} from "../../context/activeCategoryContext/activeCategoryContext.tsx";

const MyTab = () => {
    const context = React.useContext(CategoryContext);

    return (
        <ToggleButtonGroupWrap value={context?.activeCategory} exclusive onChange={context?.changeActiveCategory}>
            {CATEGORY_LISTS_BUTTON?.length > 0 &&
                CATEGORY_LISTS_BUTTON.map((item: SwitchButtons) => (
                    <ToggleButtonItem key={item.id} value={item.label}>
                        {item.label}
                    </ToggleButtonItem>
                ))}
        </ToggleButtonGroupWrap>
    );
};

export default MyTab;
