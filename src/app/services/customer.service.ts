import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiURL: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/';

  constructor(private http: HttpClient) { }

  loadCustomers(){
    return this.http.get(this.apiURL+"GetCustomers");
  }

  createNewCustomer(obj: any) {
    debugger;
    console.log('Customer Data:', obj);  // Add this to check what is being sent
    return this.http.post(this.apiURL + "CreateNewCustomer", obj);
  }
  
  
  
}
