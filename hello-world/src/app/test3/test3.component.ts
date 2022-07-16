import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styles: ['']
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Getting data from app component
  @Input() public dataFromParentComponent1: any;
  @Input("dataFromParentComponent2") public iCanDeclareAnyVariable: any;


  // Sending data to app component
  @Output()public childEvent = new EventEmitter();
  fireEvent(){
    this.childEvent.emit("Data from test3 component.");
  }

}
