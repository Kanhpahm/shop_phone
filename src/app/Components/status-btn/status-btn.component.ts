import {
  
  Component,
  
  EventEmitter,
  
  Input,
  
  OnInit,
  
  Output } from '@angular/core';

@Component({
  selector: 'app-status-btn',
  templateUrl: './status-btn.component.html',
  styleUrls: ['./status-btn.component.css']
})
export class StatusBtnComponent implements OnInit {

  @Input() status: number;  // nhận status từ product
  @Output() changeStatus: EventEmitter<number>; // EventEmitter thông báo giá trị mới 
  constructor() {
    this.status = 0;
    this.changeStatus = new EventEmitter();
  }
  ngOnInit(): void {
  }
  onChangeStatus(status: number) {
    this.changeStatus.emit(status);
  }

}
