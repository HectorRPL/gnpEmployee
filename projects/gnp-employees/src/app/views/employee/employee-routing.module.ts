import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: EmployeeComponent,
  },
  {
    path: 'list',
    component: EmployeeListComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule {
}
