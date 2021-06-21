import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DropdownsPageComponent} from './pages/dropdowns-page/dropdowns-page.component';
import {FormComponent} from './pages/form/form.component';
import {TableComponent} from './pages/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dropdown',
    component: DropdownsPageComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'table',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
