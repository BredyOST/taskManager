import { ButtonSwitchList, SwitchButtons } from './shared/types/types.ts';

/** текст для логотипа*/
export const LOGO: string = 'todos';

/** список кнопок категорий задачи*/
export const CATEGORY_LISTS_BUTTON: SwitchButtons[] = [
    { id: 1, label: ButtonSwitchList.all },
    { id: 2, label: ButtonSwitchList.active },
    { id: 3, label: ButtonSwitchList.completed },
];
