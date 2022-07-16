import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styles: ['']
})
export class Test6Component implements OnInit {

  public employees : any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.employees;
  }

}
