import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rentalDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  rentals:Rental[]=[];     
  apiUrl="https://localhost:44377/api/rentals/getrentaldetails";  
  dataLoaded=false;
  cars:Car[]=[];   
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.GetCarsLargeByCarId(params["carId"])
      }
      
    })
    }
    findPicture(imagePath:string){
      let ilk = imagePath.lastIndexOf('\\');
      let son = imagePath.length;
     let newİmagePath = "assets/images/"+imagePath.slice(ilk+1,son);
     return newİmagePath;
    }

   GetCarsLargeByCarId(carId:number){
      this.carService.getCarByCarId(carId).subscribe(response=>{
        this.cars = response.data
      })
     } 
    
}
   



