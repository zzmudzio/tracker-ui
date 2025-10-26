import { Routes } from '@angular/router';
import { DefaultViewComponent } from './default-view/default-view.component';
import { BugsComponent } from './bugs/bugs.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultViewComponent
    },
    {
        path: 'bugs/:type',
        component: BugsComponent
    }
];
