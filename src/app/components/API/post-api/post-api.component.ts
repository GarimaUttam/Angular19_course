import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from "../../../reusable/tabs/tabs.component";
import { Car, ICarList } from '../../../model/car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostAPIComponent implements OnInit, AfterViewInit{

  // ngOninit is initialised when our component is initilaised
  // used to tirgger the API call function
  ngOnInit(): void {
    this.getAllCars();
    debugger;
  }
  currentTab: string = 'carList';
  onTabchange(tabName: string){
    debugger;
    this.currentTab = tabName;
  }
  //Constructor is used to initialise the variable on the page load
  firstName: string;

  constructor(){
    this.firstName = "";
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", performance.now());
  }

  http = inject(HttpClient);
  carList: ICarList[] = [];
  carObj: Car = new Car();
  
  getAllCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any) => {
      this.carList = res.data;
    })
  }

  //we us POST API to intset and create new record
  // for post API we need link and OBJ
  onSaveCar() {
    debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj).subscribe((res:any) => {
      debugger;
      if(res.result) {
        alert("Car created Successfully");
        this.getAllCars();
        this.carObj = new Car();

      } else{
        alert(res.message);
      }
    })
  }

  onEdit(data: any){
    this.carObj = data; 
  }

  updateCar(){
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.carObj).subscribe((res: any) => {
      if(res.result) {
        alert("Car updated Successfully");
        this.getAllCars();
      } else{
        alert(res.message);
      }
    })
  }

  onDelete(id: number){
    const isDelete = confirm("Are you sure to delete this field");
    debugger;
    if(isDelete == true){
          this.http.delete("https://freeapi.gerasim.in/api/CarRentalApp/DeleteCarByCarId?carid=" + id).subscribe((res:any) => {
            if(res.result) {
              alert("Car deleted Successfully");
              this.getAllCars();
            } else{
              alert(res.message);
            }
          })
        }
  }
}
