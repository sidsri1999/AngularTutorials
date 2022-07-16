import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h1>Test1 Component</h1>
            
            <h3>Interpolation Example</h3>
            <div>
              <div>Evaluate Property:  {{name}}</div>
              <div>Evaluates Expression: {{2+2}}</div>
              <div>String Concatenation: {{"Welcome "+name}}</div>
              <div>JS Property: {{name.length}}</div>
              <div>JS Methods: {{name.toUpperCase()}}</div>
              <div>Methods defined inside component class: {{greetUser()}}</div>
              <div>Not Possible In Interpolation: Assignment 'a=2+2'</div>
              <div>Not Possible In Interpolation: Access to global variable 'window.location.href'</div>
              <div>We can access global variable by doing it in class, then binding here: {{siteUrl}}</div>
            </div>
            
            
            <h3>Difference Between Attributes And DOM Property</h3>
            <div>
              <div>Note First:
                  <div>Attributes and properties are not same.</div>
                  <div>Attributes are defined by HTML, while Properties are defined by DOM(Document Object Model)</div>
                  <div>Attributes initialize DOM properties and they are done. Attribute value can't change once they are initialized.</div>
                  <div>Properties value can change</div>
                  <div><input type="text" value="attribute"> inspect and go in console try, $0.getAttribute('value'), $0.value, now change value in input field again try</div>
              </div>
            </div>


            <h3>Property Binding Example</h3>
            <div>
              <div>Example: <input type="text" [id]="myId"> Inpect And Check</div>
              <div>We can achieve the above scenario by interpolation too: <input type="text" id="{{myId}}"></div>
              <div>But, we if we have boolean value, then interpolation will not work, because it will assume it as String <input type="text" disabled="{{falseValue}}"></div>
              <div>But, we can achieve that with property binding <input type="text" [disabled]="falseValue"></div>
              <div>There is one more syntax for property binding: <input type="text" bind-disabled="falseValue"></div>
            </div>
            
            <h3>Class Binding</h3>
            <div>
                <div>Normally We Do: <span class="text-success">Codevolution</span></div>
                <div>With Class Binding: <span [class]="successClass">Codevolution</span></div>
                <div>Conditionally Apply Class: <span [class.text-danger]="hasError">Codevolution</span></div>
                <div>Conditionally Apply Multiple Classes(Using ngClass): <span [ngClass]="messageClasses">Codevolution</span></div>
            </div>

            <h3>Style Binding</h3>
            <div>
                <div>Normal Style: <span style="color: 'orange';">Orange</span></div>
                <div>Style Binding: <span [style.color]="'orange'">Orange</span></div>
                <div>Conditional Style Binding: <span [style.color]="hasError ? 'red' : 'green'">Red</span></div>
                <div>Style Binding Taking From Component Class: <span [style.color]="highlightColor">Yellow</span></div>
                <div>To Use Multiple Classes (Using ngStyle): <span [ngStyle]="styleClass">Blue And Italic</span></div>
            </div>

            
            <h3>Event Binding</h3>
            <div>
                <div>Earlier, we have done from class to template, in this data flow from template to class</div>
                <div>Example (Check Console, On click): <button (click)="onClick()">Check Console</button></div>
                <div>Setting value to a property: <button (click)="onClick1()">Check Right To me</button> {{greeting}}</div>
                <div>Getting Information About Event (Example About Click Event): <button (click)="onClick2($event)">Check Right To me</button> {{eventData}}</div>
                <div>We also not required event handler(means method in class), if we have small code: <button (click)="greeting2 = 'Hey Man'">Check Right To me</button> {{greeting2}}</div>
            </div>

            <h3>Template Reference Variables</h3>
            <div>
                <div>It can be used to refer the HTML Element, and we can use to pass data to the class by using this.</div>
                <div>Sending Data From Input Field: <input #myTemplateReferenceVar type="text"> <button (click)="consumeTemplateReferenceVarValue(myTemplateReferenceVar.value)">Check Console</button></div>
                <div>Sending Whole TRV:  <input #myTemplateReferenceVar1 type="text"> <button (click)="consumeWholeTemplateReferenceVar(myTemplateReferenceVar1)">Check Console</button></div>
            </div>

            <h3>Two Way Binding</h3>
            <div>
                <div>When we work with forms, we need to make sure, model and view are always in sync, otherwise may lead to data inconsitency.</div>
                <div>Two Way Binding: It is combination of Property Binding and Event Binding.</div>
                <div>We Use this [(ngModel)] here, known as banana in a box.</div>
                <div>ngModel is part of FormsModule, so we have to import that in AppModule.</div>
                <div>Whatever u write in input: prints after that: <input [(ngModel)]="name1" type="text"> {{name1}}</div>
            </div>
                        
            `,
  styles: [`
                .text-success {
                  color: green;
              }
              .text-danger{
                  color: red;
              }
              .text-special{
                  font-style: italic;
              }
            `]
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Interpolation Use
  public name = "Vishwas";
  public siteUrl = window.location.href;
  greetUser(){
    return "Hello " + this.name;
  }

  // Property Binding Use
  public myId= "testId";
  public falseValue = false;

  // Class Binding Use
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : true,
    "text-danger" : false,
    "text-special": true
  }

  // Style Binding
  public highlightColor = "yellow";
  public styleClass  = {
    color: "blue",
    fontStyle: "italic"             // We can't use font-style, that's why using camel cases.
  }

  // Event Binding
  onClick() {
    console.log("Button Clicked.");       // Event Handler
  }
  public greeting = "";
  onClick1(){
    this.greeting = "Welcome Man!";
  }
  public eventData = "";
  onClick2(event: any){
    this.eventData = event;
  }
  public greeting2 = "";

  // Template Reference Variable
  consumeTemplateReferenceVarValue(value: any){
    console.log(value);
  }
  consumeWholeTemplateReferenceVar(trv: any){
    console.log(trv);
  }

  // Two Way Binding
  public name1 = "";

}
