import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geradorqrcode',
  templateUrl: './geradorqrcode.component.html',
  styleUrls: ['./geradorqrcode.component.scss']
})
export class GeradorqrcodeComponent implements OnInit {

  qrcode:string = '';
  @Input() border:any;

  constructor() { }

  ngOnInit(): void {
  }

  public setBorder(border: any){
    this.border = border;
  }

}
