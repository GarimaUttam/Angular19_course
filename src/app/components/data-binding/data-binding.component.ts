import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  firstName: string = "Garima";
  rollnum: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter your full name :";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";
  
  constructor(private router: Router) {
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);
    // this.showWelcomeMessage();
  }

  showWelcomeMessage() {
    alert("Welcome to Angular tuto")
  }
  onCityChange() {
    console.log("city changed")
  }

  navigatetoAdmin(){
    this.router.navigateByUrl("/admin");
  }
}
