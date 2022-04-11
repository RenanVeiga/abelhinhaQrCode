import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent implements OnInit {

  contador:number = 1;
  darkclass:object = {};
  @Output() emissorclass = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  darkmode(): void {
    document.body.classList.toggle('dark-theme');
    if(this.contador == 1){
      this.darkclass = {"darkmode":true};
      this.contador = 0;
    }else{
      this.darkclass = {};
      this.contador = 1;
    }
    this.emissorclass.emit(this.darkclass);
  }
}
