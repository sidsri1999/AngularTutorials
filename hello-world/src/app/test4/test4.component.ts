import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styles: ['']
})
export class Test4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public personObject = {
    "firstName": "John",
    "lastName": "Doe"
  };

  public date = new Date();

}
