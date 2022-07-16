import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { FormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test6/test6.component';
import { EmployeeService } from './employee.service';
import { Test7Component } from './test7/test7.component';
import { HttpClientModule } from '@angular/common/http';
import { Employee1Service } from './employee1.service';
import { Test8Component } from './test8/test8.component';
// import { Test91Component } from './test9/test9.component';
// import { Test92Component } from './test10/test10.component';
import { routingComponents } from './app-routing.module';
import { Test9Component } from './test9/test9.component';
import { Test921Component } from './test921/test921.component';
import { Test922Component } from './test922/test922.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Test6Component,
    Test7Component,
    Test8Component,
    Test9Component,
    // Test9Component,
    // Test10Component
    routingComponents,
    Test921Component,
    Test922Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    // For using HTTP obaervables
    HttpClientModule
  ],
  providers: [EmployeeService, 
    // To Show the working of HTTP Observables
    Employee1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
