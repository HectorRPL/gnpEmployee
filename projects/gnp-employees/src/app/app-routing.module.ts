import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeModule} from './views/employee/employee.module';

const routes: Routes = [
  // main views // http://localhost:4200/employee/create
  {
    path: 'employee',
    loadChildren: './views/employee/employee.module#EmployeeModule',
    data: {
      preload: false
    }
  },
  {
    path: 'employee',
    loadChildren: () => import('./views/employee/employee.module').then(m => m.EmployeeModule),
    data: { preload: true }
  },
  // redirects
  { path: '',   redirectTo: '/employee/create', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
