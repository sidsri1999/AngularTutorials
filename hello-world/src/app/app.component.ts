import { Component } from '@angular/core';


// Meta Data(@Decorator): If the class is component, or regular class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  // for component interaction with test3
  public dataFromAppComponent1 = "I came from AppComponent1.";
  public dataFromAppComponent2 = "I came from AppComponent2.";
   public messageFromTestComponet = "";
}
