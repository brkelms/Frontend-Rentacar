
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44377/api/";  
  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsdetails"
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByCarId(carId:number): Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsdtobycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandId:number): Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsdtobybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   getCarsByColorId(colorId:number): Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsdtobycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
}
   




