import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent implements OnInit {

  @Input() darkmode: any
  svgtrue = 1;
  corsvg:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  setClass(setclass: any){
    this.darkmode = setclass;
    if(this.svgtrue == 1){
      this.corsvg = "white";
      for(let i=0; i<=2; i++){
      document.getElementById("svg"+ i)?.setAttribute("fill", "white")
      }
      this.svgtrue = 0;
    }else{
      this.corsvg = "";
      for(let i=0; i<=2; i++){
        document.getElementById("svg"+ i)?.setAttribute("fill", "black")
      }
      this.svgtrue = 1;
    }
  }
}
