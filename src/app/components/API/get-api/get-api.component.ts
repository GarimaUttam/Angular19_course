import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList: any [] = [];
  productList: any [] = [];

  constructor(private http: HttpClient){

  }
  getUsers(){
    // the GET'` datatype is returning observable we can subscribe to that 
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) =>{
        this.userList = result;
    })
  }

  // third party library
//   getProducts(){
//     this.http.get("https://fake-store-api.mock.beecepter.com/api/products").subscribe((res:any) => {
//       this.productList = res;
//     })
//   }
// }
}
