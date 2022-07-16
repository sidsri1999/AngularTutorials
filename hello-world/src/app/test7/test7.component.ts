import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { Employee1Service } from '../employee1.service';

@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styles: ['']
})
export class Test7Component implements OnInit {

  public employees : IEmployee[] = [];

  constructor(private employeeService1 : Employee1Service) { }

  ngOnInit(): void {
    this.employeeService1.getEmployees().subscribe(
      data => this.employees = data
    );
  }

}
