import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styles: ['']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ngIf
  public ngIfDisplay = false;

  //ngSwitch
  public color = "blue";

  //ngFor
  public colors = ["red", "blue", "green"];

}
