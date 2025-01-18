import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
    div1Visisble:boolean = false;
    isChecked: boolean = false;

    cityList: string[] = [
      "Pune",
      "Mumbai",
      "Bangalore",
      "Delhi",
      "Hyderabad"
    ]

    hideShowDiv1(isShow: boolean) {
      this.div1Visisble = isShow;
    }

    employeeArray: any[] = [
      {empId:1, name: "Garima", company: "Google", city:"Bangalore"},
      {empId:2, name: "papa", company: "Rubrik", city:"Delhi"},
      {empId:3, name: "priyanka", company: "Intuit", city:"Hyderabad"},
      {empId:4, name: "nancy", company: "Google", city:"Bangalore"},
      {empId:5, name: "mummy", company: "loreal", city:"mumbai"},
      {empId:6, name: "gaurav", company: "Google", city:"Bangalore"}
    ]
    

}
