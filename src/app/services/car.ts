import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Car {

  constructor(private http: HttpClient) { }
  loadCars() {
    debugger
    return this.http.get('/api/api/CarRentalApp/GetCars');
  }
  addCars(obj: any) {
    debugger
    return this.http.post('/api/api/CarRentalApp/CreateNewCar', obj);
  }
updateCars(obj: any) {
  debugger
  return this.http.put('/api/api/CarRentalApp/UpdateCar/' , obj);
}
deleteCars(obj:any) {
  
  console.log("Deleting car with ID:", obj.carId);
  return this.http.delete('/api/api/CarRentalApp/DeleteCarbyCarId?carid='+obj.carId);
}

}
