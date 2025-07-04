import { LowerCasePipe, NgClass, NgStyle, SlicePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle,UpperCasePipe,LowerCasePipe,SlicePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
divClassName=signal<string>('');
toggleColor:boolean=false;  
firstName:string="Vaibhav";
lastName:string=" Dobariya";
setBgClass(className:string)
{
  this.divClassName.set(className);
}
setToggle(){
  this.toggleColor=!this.toggleColor;
}
constructor(){
  console.log("constructor");
}
ngOnInit(): void {
  console.log("ngOnInit")
}
ngOnChanges(changes: SimpleChanges): void {
   console.log("ngOnChanges")
}
ngAfterContentInit(): void {
   console.log("ngAfterContentInit")
}
ngAfterContentChecked(): void { 
   console.log("ngAfterContentChecked"); 
}
ngAfterViewInit(): void {
  console.log("ngAfterViewInit"); 
}

ngOnDestroy(): void {
  console.log("ngOnDestroy"); 
}
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked"); 

}
}
