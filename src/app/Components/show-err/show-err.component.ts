import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-err',
  templateUrl: './show-err.component.html',
  styleUrls: ['./show-err.component.css']
})
export class ShowErrComponent implements OnInit {
  @Input() formField: any;
  @Input() key: string; // nhận tên biến truyền vào từ thằng cha

  constructor() { 
    this.key = ''
  }

  ngOnInit(): void {
  }

}
