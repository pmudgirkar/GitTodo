import { Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { TodosComponent } from './myComponents/todos/todos.component';

export const routes: Routes = [
    {path: '', component: TodosComponent},
{path: 'about', component: AboutComponentComponent},
];
