import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-employee',
  templateUrl: './post-employee.component.html',
  styleUrls: ['./post-employee.component.css']
})
export class PostEmployeeComponent implements OnInit {

  @Input() employee: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  postEmployee(employee: any): void {
    console.log('POST employee model => ', employee);
  }

}
