import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  tokenExpired$: Subject<boolean> = new Subject<boolean>(); 
  tokenRecieved$: Subject<boolean> = new Subject<boolean>();

  get tokenExpiredStream() {
    return this.tokenExpired$.asObservable(); 
  }

  apiURL: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/';

  constructor(private http: HttpClient) { }

  
  loadCustomers(){
    return this.http.get(this.apiURL+"GetCustomers");
  }

  createNewCustomer(obj: any) {
    console.log('Customer Data:', obj); 
    return this.http.post(this.apiURL + "CreateNewCustomer", obj);
  }

  setTokenExpired() {
    this.tokenExpired$.next(true); 
  }
}