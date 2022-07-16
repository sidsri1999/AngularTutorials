import { Injectable } from '@angular/core';



// Service can be defined as the class with the multiple purposes.
//  Share Data, Implement Application Logic, External Interaction ( connecting with database ) 
// @Injectable decorator, indicates that this service might have some other dependencies injected, in case of 
//  our component classes the @Component manages this part also.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    {"name":"employee1", "id":1, "age": 25},
    {"name":"employee2", "id":2, "age": 25},
    {"name":"employee3", "id":3, "age": 25},
    {"name":"employee4", "id":4, "age": 25}
  ];

  constructor() { }

  getEmployees(){
    return this.employees;
  }
}
