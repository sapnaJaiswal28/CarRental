import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { APIResponse, CarModel } from '../../model/car';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles',
  imports: [FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles implements OnInit {
  newCarObj: CarModel;
  http = inject(HttpClient);
  carList: CarModel[] = [];
  isLoading: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {
    this.newCarObj = new CarModel();
  }

  ngOnInit(): void {
    console.log('Vehicles component initialized');

    this.getAllCar();
  }

  getAllCar() {
    console.log('Fetching cars...');
    this.http
      .get<APIResponse>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars'
      )
      .subscribe((res: APIResponse) => {
        console.log('Cars loaded:', res.data);
        this.carList = res?.data || [];
        this.isLoading = false;
        this.cdr.detectChanges(); // manually trigger update
        // this.carList = res.data;
      });
  }
  onSaveCar() {
    this.http
      .post<APIResponse>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar',
        this.newCarObj
      )
      .subscribe((res: APIResponse) => {
        if (res.result) {
          this.getAllCar();
          alert('Successful');
        } else {
          alert(res.message);
        }
      });
  }

  onEdit(data: CarModel) {
    this.newCarObj = data;
  }

  onUpdtaeCar() {
    this.http
      .put<APIResponse>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar',
        this.newCarObj
      )
      .subscribe((res: APIResponse) => {
        if (res.result) {
          this.getAllCar();
          alert('Update Successful');
        } else {
          alert(res.message);
        }
      });
  }

  onDeleteCar(id: number) {
    this.http
      .delete<APIResponse>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=' +
          id
      )
      .subscribe((res: APIResponse) => {
        if (res.result) {
          this.getAllCar();
          alert('Delete Successful');
        } else {
          alert(res.message);
        }
      });
  }

 
}
