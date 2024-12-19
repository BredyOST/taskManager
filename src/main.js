import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './app/styles/reset.ts';
import ActiveCategoryContextComponent from './shared/context/activeCategoryContext/activeCategoryContextComponent.tsx';
import TaskContextComponent from './shared/context/tasksContext/taskContextComponent.tsx';
createRoot(document.getElementById('root')).render(_jsxs(StrictMode, { children: [_jsx(GlobalStyles, {}), _jsx(ActiveCategoryContextComponent, { children: _jsx(TaskContextComponent, { children: _jsx(App, {}) }) })] }));
