export class userModel{

  CustomerId: number;
  CustomerName: string;
  CustomerCity: string;
  MobileNo: string;
  Email: string;

   constructor() {
    this.CustomerId = 0;
    this.CustomerName = '';
    this.CustomerCity = '';
    this.MobileNo = '';
    this.Email='';
  }

}

export interface APIResponse{
  message: string
  result: boolean
  data: any
}