import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-ng-for-directive',
  imports: [NgFor,UpperCasePipe,LowerCasePipe, JsonPipe, DatePipe, NaPipe],
  templateUrl: './ng-for-directive.component.html',
  styleUrl: './ng-for-directive.component.css'
})
export class NgForDirectiveComponent {
  cityList:string[] = ["Kanpur", "Bangalore", "Jabalpur", "Mumbai", "Delhi"];

  courseName: string = "Angular 19";
  studentObj: any = {
    name: 'Garima',
    city: "Bangalore",
    mobile: "732138291"
  }

  currentDate: Date = new Date();

employeeArray: any[] = [
  {empId:1, name: "Garima", company: "Google", city:"Bangalore"},
  {empId:2, name: "papa", city:"Delhi"},
  {empId:3, name: "priyanka", company: "", city:"Hyderabad"},
  {empId:4, name: "nancy", company: "Google", city:"Bangalore"},
  {empId:5, name: "mummy", company: null, city:"mumbai"},
  {empId:6, name: "gaurav", company: "Google", city:"Bangalore"}
]






}