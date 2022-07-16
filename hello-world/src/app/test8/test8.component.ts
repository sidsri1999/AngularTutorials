import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { Employee1Service } from '../employee1.service';

@Component({
  selector: 'app-test8',
  templateUrl: './test8.component.html',
  styles: ['']
})
export class Test8Component implements OnInit {

  public employees : IEmployee[] = [];

  
  public errorMessage: any;

  constructor(private employeeService: Employee1Service) { }

  ngOnInit(): void {
    this.employeeService.getEmployeesWithError().subscribe(data => this.employees = data,
      error => this.errorMessage = error)
  }

}
