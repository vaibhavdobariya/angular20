import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  startMonthName: string = "jan";
cityList:string[] = ["Bangalore", "Chennai", "Delhi", "Mumbai"];
studList:any[] = [
  {name: "John", age: 20, city: "Bangalore"},
  {name: "Jane", age: 22, city: "Chennai"},
  {name: "Doe", age: 21, city: "Delhi"},
  {name: "Smith", age: 23, city: "Mumbai"}];
isMessageVisible: boolean = true;
showMessage() {
  this.isMessageVisible=true;
              }
hideMessage() {
  this.isMessageVisible=false;
              }
}
