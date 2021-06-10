import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  apellido: string;
  departamento: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Pedro', apellido: 'Fulanito', departamento: 'Contabilidad'},
  {nombre: 'Pablo', apellido: 'Menganito', departamento: 'Sistemas'},
  {nombre: 'Bart', apellido: 'Sutanito', departamento: 'Contabilidad'},
  {nombre: 'Homero', apellido: 'Sutanito', departamento: 'Marketing'},
  {nombre: 'Marge', apellido: 'Fulanito', departamento: 'Marketing'},
  {nombre: 'Goku', apellido: 'Sutanito', departamento: 'Sistemas'},
  {nombre: 'Ronaldo', apellido: 'Fulanito', departamento: 'Marketing'},
  {nombre: 'Elon', apellido: 'Menganito', departamento: 'Contabilidad'},
  {nombre: 'Héctor', apellido: 'Fluorine', departamento: 'Sistemas'},
  {nombre: 'Apolo', apellido: 'Sutanito', departamento: 'Sistemas'},
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'departamento'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
