import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// 1. We use angular CLI to generate the component, ng g c <component-name>
// 2. It will add folder inside app folder, and add that component in the declaration array in app.module.ts



@Component({
  selector: 'app-test',
  // selector:    'app-test'  : Custom Html Tag              <app-test></app-test>
  // selector:    '.app-test' : We can use it as class       <div class="app-test"></div>
  // selector:    '[app-test]': We can use as an attribute   <div app-test></div>
  templateUrl: './test.component.html',
  // templateUrl: './test.component.html'         To specify template location
  // template: '<div>Test Works!</div>'           Inline HTML
  // template: `<div>Test Works!</div>
  //            <div>Test Works!</div>`           If HTML is present in more than one line
  styleUrls: ['./test.component.css']
  // styleUrls: ['./test.component.css']          To specify css file location
  // styles: ['div{color:green;}']                         Inline Style
  // styles: [`div{
  //                color:getCurrencySymbol;
  //              }`]                             If we need to specify in more than one line

})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
