import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
courseName:string = "Angular 20";
courseDuration:number = 20;
coursePrice:number = 1000;
maxLength:number = 5;
inputType="radio";
myClassName="myColor";
constructor() {

}
showCourseName() {
    alert(this.courseName);
  }
  changeCourseName(){
    this.courseName="React 20";
  }
onCityChange(){
  alert("City changed");
}
}
