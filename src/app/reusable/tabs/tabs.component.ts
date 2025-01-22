import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit{
  @Input() tabList: string[] = [];

  @Output() onTabClicked = new EventEmitter<string>();

  currentclickedTab: string = "";
  

  constructor(){
    
  }
    //if we want the particular tab to be by default selected we can use the ngOninit
  ngOnInit(): void {
    debugger;
    this.currentclickedTab = this.tabList[0];
  }
  onTabChange(tabName: string){
    debugger;
    this.currentclickedTab = tabName;
    this.onTabClicked.emit(tabName);
  }

}
