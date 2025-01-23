
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router);
  custService = inject(CustomerService);
  http = inject(HttpClient);

  constructor() {
    this.custService.tokenExpired$.subscribe((Res:boolean) => {
      const loggedData = localStorage.getItem("angular19TokenData");
      
      if(loggedData){
        const loggedUser = JSON.parse("loggedData");
        const obj =
        {
          "emailId": loggedUser.emailId,
          "token": loggedUser.token,
          "refreshToken": loggedUser.refreshToken
        };
  
      if(Res){
        this.http.post("https://projectapi.gerasim.in/api/UserApp/refresh", obj).subscribe((res: any) => {
          debugger;
          localStorage.setItem("angular19user", res.data.userId);
          localStorage.setItem("angular19Token", res.data.token);
          localStorage.setItem("angular19TokenData", JSON.stringify(res.data));
          });
          this.custService.tokenExpired$.next(true);
      }
      }
    })
  }
  
 onLogOut() {
  localStorage.removeItem("angular19user");
  this.router.navigateByUrl("login");
 }
}
