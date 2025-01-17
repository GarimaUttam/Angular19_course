import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  imports: [NgFor],
  templateUrl: './ng-for-directive.component.html',
  styleUrl: './ng-for-directive.component.css'
})
export class NgForDirectiveComponent {
  cityList:string[] = ["Kanpur", "Bangalore", "Jabalpur", "Mumbai", "Delhi"];


employeeArray: any[] = [
  {empId:1, name: "Garima", company: "Google", city:"Bangalore"},
  {empId:2, name: "papa", company: "Rubrik", city:"Delhi"},
  {empId:3, name: "priyanka", company: "Intuit", city:"Hyderabad"},
  {empId:4, name: "nancy", company: "Google", city:"Bangalore"},
  {empId:5, name: "mummy", company: "loreal", city:"mumbai"},
  {empId:6, name: "gaurav", company: "Google", city:"Bangalore"}
]






}