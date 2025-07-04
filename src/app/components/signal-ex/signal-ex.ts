import { Component, computed, signal } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
firstName:string="Vaibhav";
productName="MOto";
courseName=signal<string>("Angular");
courseDuration=signal("8 videos");
courseFees=signal<number>(2000);

courseDetail=computed(()=>this.courseName()+this.courseDuration() + this.courseFees());
constructor(){
  setTimeout(()=>{
    this.courseName.set("React");
  },5000);
  
}
}
