import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-teken-sale',
  templateUrl: './teken-sale.component.html',
  styleUrls: ['./teken-sale.component.css']
})
export class TekenSaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#teken').particleground({
      dotColor: '#85F5FF',
      lineColor: '#85F5FF',
      lineWidth:0.2
  });
  }

}
