import { NgStyle } from '@angular/common';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  imports: [NgStyle],
  templateUrl: './progressbar.html',
  styleUrl: './progressbar.css'
})
export class Progressbar {
/*
of static so now if we have to send data
from parent component to child component so in this case ng4 is our parent
component and app progress is our child component in this case car is our
parent component and app progessbar is our child component
data pass have to parent to child component we use input caservice is parent and progressbar is child
*/ 
@Input() progessValue:number=0;
}
