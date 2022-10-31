import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max';
  server = false;
  Counter = 5;  

  ngOnInit() { 
    console.log(this.server + ' onInit');  
  }

  countChangedHandler(server: boolean) {
    this.server = server;
    console.log(server+ ' onEvent');  
  }
}
