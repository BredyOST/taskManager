import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ToggleButtonGroupWrap, ToggleButtonItem } from './myTabStyled/myTabStyled.ts';
import { CATEGORY_LISTS_BUTTON } from '../../../index.const.ts';
import { CategoryContext } from "../../context/activeCategoryContext/activeCategoryContext.tsx";
const MyTab = () => {
    const context = React.useContext(CategoryContext);
    return (_jsx(ToggleButtonGroupWrap, { value: context?.activeCategory, exclusive: true, onChange: context?.changeActiveCategory, children: CATEGORY_LISTS_BUTTON?.length > 0 &&
            CATEGORY_LISTS_BUTTON.map((item) => (_jsx(ToggleButtonItem, { value: item.label, children: item.label }, item.id))) }));
};
export default MyTab;
