import { Component, OnInit } from '@angular/core';
import { variacion } from '../Formula/formula';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit{

  a : number = 0;
  b : number = 0;
  x = [0, 0, 0, 0];
  y = [0, 0, 0, 0];
  TextV : any;

  constructor() { }

  ngOnInit(): void {
  }

  variacion() {
    let result : number[];
    result = variacion(this.a, this.b, this.x);
    this.y = result;
    this.TextV = this.y;
  }

}