import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#b_ground').particleground({
      dotColor: '#85F5FF',
      lineColor: '#85F5FF',
      lineWidth:0.2
  });
  }

}
