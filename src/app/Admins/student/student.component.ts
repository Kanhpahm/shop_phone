import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
student:any;
  constructor(
    private studentService:StudentService
  ) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data=>{
      this.student = data
    })
  }

}
