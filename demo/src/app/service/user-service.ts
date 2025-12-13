import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient){}
  
   createCustomer(obj: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewBooking',
      obj
    );
  }
}
