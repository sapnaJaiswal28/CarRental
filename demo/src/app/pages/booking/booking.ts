import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { BookinService } from '../../service/bookin-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { APIResponse } from '../../model/car';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, DatePipe, CommonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {
  bookingServ = inject(BookinService);
  http = inject(HttpClient);

  bookingForm: FormGroup = new FormGroup({
    customerName: new FormControl(''),
    customerCity: new FormControl(''),
    mobileNo: new FormControl(''),
    email: new FormControl(''),
    bookingId: new FormControl(0),
    carId: new FormControl(''),
    bookingDate: new FormControl(''),
    discount: new FormControl(''),
    totalBillAmount: new FormControl(''),
  });

  constructor(private cdr: ChangeDetectorRef) {}

  carList: any[] = [];
  bookingList: any[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.getCarList();
    this.getBookingList();
  }

  getCarList() {
    this.bookingServ.getAllCar().subscribe((res: any) => {
      this.carList = res.data;
    });
  }

  getBookingList() {
    this.bookingServ.getAllBooking().subscribe((res: any) => {
      this.bookingList = res?.data || [];
      console.log(this.bookingList);
      this.isLoading = false;
      this.cdr.detectChanges(); // manually trigger update
    });
  }

  onSave() {
    const formValue = this.bookingForm.value;
    this.bookingServ.saveBooking(formValue).subscribe((res: any) => {
      if (res.result) {
        console.log(res);
        alert('Booking done');
        this.getBookingList();
      } else {
        alert(res.message);
      }
    });
  }

  onDeleteBooking(id: number) {
    this.http
      .delete<APIResponse>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/DeletBookingById?id=' +
          id
      )
      .subscribe((res: APIResponse) => {
        if (res.result) {
          this.getBookingList();
          alert('Delete Successful');
        } else {
          alert(res.message);
        }
      });
  }
  onEditBooking(item: any) {
    this.bookingForm.patchValue({
      customerName: item.customerName,
      customerCity: item.customerCity,
      mobileNo: item.mobileNo,
      email: item.email,
      bookingId: item.bookingId,
      carId: item.carId,
      bookingDate: item.bookingDate, // ensure format matches <input type="date">
      discount: item.discount,
      totalBillAmount: item.totalBillAmount,
    });
  }

  onUpdateCar() {
    const formValue = this.bookingForm.value;

    this.onDeleteBooking(formValue.bookingId);

    this.bookingServ.saveBooking(formValue).subscribe((res: any) => {
      if (res.result) {
        console.log(res);
        alert('Booking done');
        this.getBookingList();
      } else {
        alert(res.message);
      }
    });
  }
}
// ng serve --port 4208
