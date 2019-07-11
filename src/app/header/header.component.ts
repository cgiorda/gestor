import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  datos: any = [
    {url: '/', nombre: "Home"},
    {url: '/Clientes', nombre: "Clientes"},
    {url: '/AbmCliente', nombre: "ABM Clientes"},
    {url: '/noFunca', nombre: "No Funca"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
