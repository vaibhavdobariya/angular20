import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resourceapi',
  imports: [],
  templateUrl: './resourceapi.html',
  styleUrl: './resourceapi.css'
})
export class Resourceapi {

  userList=resource({
    loader:()=>{
      return fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>res.json() as Promise<any[]>)
    }
  });
  reLoad() {
    this.userList.reload();
  }
}
