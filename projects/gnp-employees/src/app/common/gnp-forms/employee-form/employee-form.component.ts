import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Output() emitEmployeeModel = new EventEmitter();

  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.employeeForm = this.formBuilder.group({
      nombre: new FormControl('', [
        Validators.required,
      ]),
      apellido: new FormControl('', [
        Validators.required,
      ]),
      departamento: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    this.listenForm();
  }

  listenForm(): void {
    this.employeeForm.valueChanges
      .pipe()
      .subscribe(
        formValue => this.emitEmployeeModel.emit(formValue)
      );
  }

}
