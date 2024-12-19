import {ButtonSwitchList} from "../../types/types.ts";
import React, {createContext} from "react";

interface ICategoryContext {
    activeCategory: ButtonSwitchList;
    changeActiveCategory: (event: React.MouseEvent<HTMLElement>, newAlignment: ButtonSwitchList) => void;
}
export const CategoryContext = createContext<ICategoryContext | undefined>(undefined);
