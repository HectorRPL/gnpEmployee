import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    EmployeeFormComponent
  ]
})
export class GnpFormsModule {
}
