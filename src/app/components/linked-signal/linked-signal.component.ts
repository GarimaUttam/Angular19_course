import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})


export class LinkedSignalComponent {

   firstName = signal<string>("Garima");
   lastName = signal<string>("");

   fullName = linkedSignal({
      source: this.firstName,
      computation: (newOptions, previous) => {
        debugger;
        const fullName = newOptions + " " + this.lastName();
        return fullName;
      }
   })
   changeName() {
    this.firstName.set("Nancy"); 
   }



   user = signal({id:111, name: "Garima"});

   email = linkedSignal({
        source: this.user,
        computation: user => `${user.name+user.id}@google.com`,
        equal: (a:any, b:any)=> a.id !== b.id
   })

   changeId() {
    this.user.set({id:123,name:"garimauttam"})
   }

}
