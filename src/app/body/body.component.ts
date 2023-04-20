import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  show:Boolean=true;
  fondo:string="";
  showBtn:boolean=false;
  viajes:Array<any>=[
    {precio:"$1000",ciudad:"Holanda",disp:"50",dias:"7"},
    {precio:"$1500",ciudad:"Belgica",disp:"20",dias:"10"},
    {precio:"$1800",ciudad:"Alemania",disp:"40",dias:"14"},
    {precio:"$2000",ciudad:"Suiza",disp:"10",dias:"5"}
  ]
}
