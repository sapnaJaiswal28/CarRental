export class CarModel {
  carId: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  dailyRate: number;
  carImage: string;
  regNo: string;

  constructor() {
    this.brand = '';
    this.carId = 0;
    this.carImage = '';
    this.color = '';
    this.model = '';
    this.dailyRate = 0;
    this.regNo = '';
    this.year = 0;
  }
}

export interface APIResponse{
  message: string;
  result: boolean;
  data: any;
}
