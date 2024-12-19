import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ButtonSwitchList } from '../../types/types.ts';
import { CategoryContext } from "./activeCategoryContext.tsx";
const ActiveCategoryContextComponent = ({ children }) => {
    const [activeCategory, setActiveCategory] = React.useState(ButtonSwitchList.all);
    const changeActiveCategory = (e, newAlignment) => {
        if (newAlignment && e) {
            setActiveCategory(newAlignment);
        }
    };
    return _jsx(CategoryContext.Provider, { value: { activeCategory, changeActiveCategory }, children: children });
};
export default ActiveCategoryContextComponent;
