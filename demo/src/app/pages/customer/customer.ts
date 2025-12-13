import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-customer',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})

export class Customer implements OnInit{
   constructor(private http: HttpClient) {}

     UserServ = inject(UserService);
router = inject(Router);
  customerForm!: FormGroup;

    ngOnInit(): void {
    this.customerForm = new FormGroup({
      customerId: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      customerCity: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

 Customer = {
    customerId: 1,
    customerName: 'Sapna Sharma',
    customerCity: 'Ghaziabad',
    mobileNo: '9876543210',
    email: 'sapna@example.com'
  };

  onSubmit() {
    const formValue = this.customerForm.value;
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);

      this.UserServ.createCustomer(formValue).subscribe((res: any) => {
        if (res.result) {
          console.log(res);
          alert('User Registration Success');
        } else {
          alert(res.message);
        }
      });
    }
  }
}
