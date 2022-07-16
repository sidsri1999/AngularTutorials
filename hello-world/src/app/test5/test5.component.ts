import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styles: ['']
})
export class Test5Component implements OnInit {

  service; 
  employees: any;


  constructor() { 
    this.service = new EmployeeService()
  }

  ngOnInit(): void {
    this.employees = this.service.employees;
  }

}
