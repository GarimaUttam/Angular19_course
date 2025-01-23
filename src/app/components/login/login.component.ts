import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginObj: any = {
    username: '',
    password: '',
  }
  
  apiLoginObj: any = {
    "EmailId": "",
    "Password": ""
  }

  router = inject(Router);
  http = inject(HttpClient);

  onLogin() {
    debugger;
    //doing API call integration instead of hardcoding it
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj).subscribe((res: any) => {
      debugger;
      localStorage.setItem("angular19user", res.data.userId);
      localStorage.setItem("angular19Token", res.data.token);
      localStorage.setItem("angular19TokenData", JSON.stringify(res.data));
      this.router.navigateByUrl("admin");
  
    }, error => {
      debugger;
      alert("wrong credentials")
    })
  }
}
