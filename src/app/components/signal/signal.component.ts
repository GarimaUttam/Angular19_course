import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

    firstname = signal("Garima");

    // we can also create strongly typed signals
    lastname = signal<string>("Uttam");
    company : string = "Google";

    rollno = signal<number>(1);

    //inside the constructor also we access the signal as the method
    // signals are normal variable with braces
    constructor() {
       const val = this.firstname(); 
       setTimeout(() => {
        debugger;
        this.company = "Only Google";
        //only signal value is going to change in case change detection is being disabled
        this.firstname.set("Garima at google");
        debugger;
       }, 5000);
    }
    onIncrement(){
      this.rollno.update(oldValue => oldValue + 1);
    }
}
