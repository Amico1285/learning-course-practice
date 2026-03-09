import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ListComponent } from './pages/list/list';
import { FormComponent } from './pages/form/form';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
];
