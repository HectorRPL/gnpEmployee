import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {GnpFormsModule} from '../../common/gnp-forms/gnp-forms.module';
import {EmployeeFormComponent} from '../../common/gnp-forms/employee-form/employee-form.component';
import {CrudButtonsModule} from '../../common/crud-buttons/crud-buttons.module';
import {PostEmployeeComponent} from '../../common/crud-buttons/post-employee/post-employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    GnpFormsModule,
    CrudButtonsModule,

    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
  ],
  entryComponents: [
    EmployeeFormComponent,
    PostEmployeeComponent
  ]
})
export class EmployeeModule {
}
