import React from 'react';
import { ButtonSwitchList, ForFuncThree } from '../../types/types.ts';
import {CategoryContext} from "./activeCategoryContext.tsx";

interface IContextActiveCategory {
    children: React.ReactNode;
}

const ActiveCategoryContextComponent = ({ children }: IContextActiveCategory) => {
    const [activeCategory, setActiveCategory] = React.useState<ButtonSwitchList>(ButtonSwitchList.all);

    const changeActiveCategory: ForFuncThree<React.MouseEvent<HTMLElement, MouseEvent>, ButtonSwitchList, void> = (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        newAlignment
    ) => {
        if (newAlignment && e) {
            setActiveCategory(newAlignment);
        }
    };

    return <CategoryContext.Provider value={{ activeCategory, changeActiveCategory }}>{children}</CategoryContext.Provider>;
};

export default ActiveCategoryContextComponent;
