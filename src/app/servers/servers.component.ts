import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // HTML tag
  //selector: '[app-servers]',  // HTML attribute
  //selector: '.app-servers',     // HTML class
  // Selecting by ID is not supported
  
  //templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
