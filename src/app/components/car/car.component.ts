import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];     
  apiUrl="https://localhost:44377/api/cars/getcarsdetails";  
  dataLoaded=false;
  filterText="";
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if(params["brandId"]){
      this.GetCarsLargeByBrandId(params["brandId"])
    }
    else if(params["colorId"]){
      this.GetCarsLargeByColorId(params["colorId"])
    }
    else if(params["carId"]){
      this.GetCarsLargeByCarId(params["carId"])
    }
    else {
      this.getCars();
    }
  })
  }

  getCars(){
   this.carService.getCars().subscribe(response=>{
     this.cars = response.data
     this.dataLoaded=true;
   })
  }
  GetCarsLargeByCarId(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response=>{
      this.cars = response.data
    })
   }
  GetCarsLargeByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded=true;
    })
   }
   GetCarsLargeByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded=true;
    })
   }

}
