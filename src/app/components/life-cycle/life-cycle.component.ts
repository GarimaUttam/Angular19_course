import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, OnDestroy{

  // constructor will execute first as it executes when the class is being inititiated
  constructor() {
    console.log("Constructor");
  }

  ngOnInit(): void {
    // mostly used for API call
    console.log("ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    //viewchild, getting reference of element
  }
  ngAfterViewChecked(): void {
    // this performance is used to measure how much our UI is going to take time to load
    console.log("ngAfterviewChecked", performance.now());
  }
  // when we redirect to some other component it gets initialised
  ngOnDestroy(): void {
    alert("You are leaving this page.");
    console.log("ngOnDestroy");
  }
}
