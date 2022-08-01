import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const apiUrl = 'http://localhost:3000/students'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http:HttpClient
  ) { }
  getStudents(){
    return this.http.get(apiUrl)
  }
  getStudent(id:undefined |string){
    return this.http.get(`${apiUrl}/${id}`)
  }
  updateStd(id:number|string, obj:{name:string,avatar:string,birthday:Date,mssv:string}){
    return this.http.put(`${apiUrl}/${id}`,obj)
  }
}
