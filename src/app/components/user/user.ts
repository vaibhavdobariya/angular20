import { HttpClient } from '@angular/common/http';
import { Component, inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
 http=inject(HttpClient);
 userList:any[]=[];
 userObj:any={
  "userId":0,
  "fullName": "",
  "email": "",
  "password": "",
  "phoneNumber": ""
 };
 ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get("https://localhost:7250/api/Users").subscribe((res:any)=>{
      this.userList=res;
    })
  }
  onSaveUser(){
    this.http.post("https://localhost:7250/api/Users",this.userObj).subscribe((res:any)=>{
      alert("User Created SuceessFully");
      this.getUsers();
    })
  }
  onReset(){
    this.userObj={
        "userId":0,
        "fullName": "",
        "email": "",
        "password": "",
       "phoneNumber": ""
    }
  }
  onEdit(item:any){
    this.userObj=item
  }
  onUpdate(){
    this.http.put("https://localhost:7250/api/Users/"+this.userObj.userId,this.userObj).subscribe({
      next:()=>{
        alert("User Upadate Sucessfully")
        this.getUsers();
      },
      error:(error)=>{
        alert("Error"+ error.error)
      }
    })
  }
  onDelete(item:any){
    if(confirm("Are you sure you want to delete this user?")){
      this.http.delete("https://localhost:7250/api/Users/"+item.userId).subscribe({
        next:()=>{
          alert("User Deleted SuceessFully");
          this.getUsers();
        },
        error:(error)=>{
          alert("Error"+error.error);
        }
      })
    }
  }
}
