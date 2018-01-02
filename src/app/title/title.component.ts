import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  title: string = '持續NG中';
  titleHint: string = 'NG帶你通往夢想國度';
  constructor() { }

  ngOnInit() {
  }

}
