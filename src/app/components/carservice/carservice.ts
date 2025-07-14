import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../services/car';
import { App } from '../../app';
import { Progressbar } from '../../reusable/progressbar/progressbar';

@Component({
  selector: 'app-carservice',
  imports: [FormsModule,Progressbar],
  templateUrl: './carservice.html',
  styleUrl: './carservice.css'
})
export class Carservice implements OnInit {
  http = inject(HttpClient);
  carList: any[] = [];

  carObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": 0,
    "color": "",
    "dailyRate": 0,
    "carImage": "",
    "regNo": ""
  }
  studObj: any []= [
    {studId: 1, name: "John", age: 20, attendence:80},
    {studId: 2, name: "Jane", age: 22, attendence:90},
    {studId: 3, name: "Mike", age: 21, attendence:85},
    {studId: 4, name: "Sara", age: 23, attendence:95},
    {studId: 5, name: "Tom", age: 19, attendence:75},
    {studId: 6, name: "Emma", age: 24, attendence:88},
  ]

  constructor(private carServ: Car) { }
  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carServ.loadCars().subscribe((res: any) => {
      debugger
      this.carList = res.data;
    })
  }
  onSave() {
    this.carServ.addCars(this.carObj).subscribe((res: any) => {
      debugger
      if (res) {
        alert("Car added successfully");
        this.getCars(); // Refresh the car list after adding a new car
        this.carObj = { // Reset the form
          "carId": 0,
          "brand": "",
          "model": "",
          "year": 0,
          "color": "",
          "dailyRate": 0,
          "carImage": "",
          "regNo": ""
        };
      }
    })
  }
onEdit(item:any){
    this.carObj = item; // Set the form to the selected car's details for editing
  }
  onUpdate() {
    this.carServ.updateCars(this.carObj).subscribe((res:any)=>{
      if(res){
        debugger
        alert("Car updated successfully");
        this.getCars(); // Refresh the car list after updating
        this.carObj = { // Reset the form
          "carId": 0,
          "brand": "",
          "model": "",
          "year": 0,
          "color": "",
          "dailyRate": 0,
          "carImage": "",
          "regNo": ""
        };
      }
    })
  }
  onDelete(item: any) {
    this.carObj = item; 
    
    this.carServ.deleteCars(this.carObj).subscribe((res:any)=>{
      if(res){
        alert("Car deleted successfully");
        this.getCars(); // Refresh the car list after deletion
      } else {
        alert("Error deleting car");
      }
    })
  }
}
/*getCars() {
  debugger
  this.http.get('/api/api/CarRentalApp/GetCars').subscribe((res:any)=>{
    debugger;
    this.carList = res.data;
    if(res){
      alert("Cars fetched successfully");
    }else{
      alert("No Cars Found");
      console.error();
      
    }
  }) */


