import { ButtonSwitchList } from "../../types/types.ts";
import React from "react";
interface ICategoryContext {
    activeCategory: ButtonSwitchList;
    changeActiveCategory: (event: React.MouseEvent<HTMLElement>, newAlignment: ButtonSwitchList) => void;
}
export declare const CategoryContext: React.Context<ICategoryContext | undefined>;
export {};
