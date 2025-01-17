import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if-directive.component.html',
  styleUrl: './ng-if-directive.component.css'
})
export class NgIfDirectiveComponent {

  div1Visisble : boolean = false;

  number1: string = '';
  number2: string = '';
  
  hideDiv1() {
    this.div1Visisble = false;
  }
  showDiv1() {
    this.div1Visisble = true;
  }
}
