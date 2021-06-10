import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEmployeeComponent } from './post-employee/post-employee.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    PostEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    PostEmployeeComponent
  ]
})
export class CrudButtonsModule { }
