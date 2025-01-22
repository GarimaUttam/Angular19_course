import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { ProgressBarComponent } from '../../../reusable/progress-bar/progress-bar.component';
import { TabsComponent } from '../../../reusable/tabs/tabs.component';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, NgFor, TabsComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

    customerTabs: string[] = ["Basic Info", "Plan Info", " Payment"];

    customerObj: any = {
      "customerId": 0,
      "customerName": "",
      "customerCity": "",
      "mobileNo": "",
      "email": ""
    };
    customerArray: any [] = [];

    constructor(private custSrv: CustomerService){
      this.getCustomers();
    }

    // getCustomers() {
    //   this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe((res:any) => {
    //       this.customerArray = res.data;
    //   })
    // }

    getCustomers(){
      debugger;
      this.custSrv.loadCustomers().subscribe((res: any) => {
        this.customerArray = res.data;
      })
    }
    onSaveCustomer(){
      debugger;
        this.custSrv.createNewCustomer(this.customerObj).subscribe((res: any) => {
          if(res.result){
            alert('Customer created successfully');
            this.getCustomers();
          }
          else{
            alert(res.message);
          }
        })
    }
  
    
    

}
