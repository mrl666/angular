import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  @Output() newServerCreated: EventEmitter<boolean> =   new EventEmitter();
  @Input() count: number;

  constructor() {
    console.log('contructor');
   }

  ngOnInit(): void {
    console.log('oninit');
  }

  createNewServer() {
    console.log('createNewServer');
    this.allowNewServer = !this.allowNewServer;
    this.newServerCreated.emit(true);
  }

}
