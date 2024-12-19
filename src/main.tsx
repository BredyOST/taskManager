import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './app/styles/reset.ts';
import ActiveCategoryContextComponent from './shared/context/activeCategoryContext/activeCategoryContextComponent.tsx';
import TaskContextComponent from './shared/context/tasksContext/taskContextComponent.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyles />
        <ActiveCategoryContextComponent>
            <TaskContextComponent>
                <App />
            </TaskContextComponent>
        </ActiveCategoryContextComponent>
    </StrictMode>
);
