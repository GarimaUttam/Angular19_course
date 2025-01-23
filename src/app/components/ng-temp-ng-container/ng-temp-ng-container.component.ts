import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css'
})
export class NgTempNgContainerComponent {

  employeeArray: any[] = [
    {empId:1, isActive: false, name: "Garima", company: "Google", city:"Bangalore",attendance: 99},
    {empId:2, isActive: true, name: "papa", city:"Delhi",attendance:80 },
    {empId:3, isActive: false, name: "priyanka", company: "", city:"Hyderabad",attendance:78},
    {empId:4, isActive: false, name: "nancy", company: "Google", city:"Bangalore",attendance:98},
    {empId:5, isActive: true, name: "mummy", company: null, city:"mumbai",attendance:78},
    {empId:6, isActive: false, name: "gaurav", company: "Google", city:"Bangalore",attendance:95}
  ]

  isLoader: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoader = false;
    }, 3000)
  }
  
  
}
