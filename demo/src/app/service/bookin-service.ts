import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/car';

@Injectable({
  providedIn: 'root',
})
export class BookinService {
  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp';
  constructor(private http: HttpClient) {}

  getAllBooking() {
    return this.http.get(this.apiUrl + '/geAllBookings');
  }

  getAllCar(): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      'https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars'
    );
  }
  saveBooking(obj: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewBooking',
      obj
    );
  }

}
