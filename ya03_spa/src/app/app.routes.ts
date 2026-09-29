import { Routes } from '@angular/router';
import { Page1 } from './page1/page1';
import { Page2 } from './page2/page2';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Главная'
    },
    {
        path: 'page1',
        component: Page1,
        title: 'Страница 1'
    },
    {
        path: 'page2',
        component: Page2,
        title: 'Страница 2'
    },

];
