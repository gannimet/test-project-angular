import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'chat',
        loadComponent: () => import('./chat/chat').then((m) => m.Chat),
    },
    {
        path: 'cinema',
        loadComponent: () => import('./cinema/cinema').then((m) => m.Cinema),
    },
    {
        path: 'color-picker',
        loadComponent: () => import('./color-picker/color-picker').then((m) => m.ColorPicker),
    },
    {
        path: 'todos',
        loadComponent: () => import('./todo-page/todo-page').then((m) => m.TodoPage),
    },
    {
        path: 'users',
        loadComponent: () => import('./user-list/user-list').then((m) => m.UserList),
    },
    {
        path: 'users/:id',
        loadComponent: () =>
            import('./user-list/user-details/user-details').then((m) => m.UserDetails),
    },
];
