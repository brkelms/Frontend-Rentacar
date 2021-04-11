import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  cars:Car[]=[];  
  rentCarForm:FormGroup;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     if(params["carId"]){
        this.GetCarsLargeByCarId(params["carId"])
        this.createRentalForm()
        
      }
      else {
        this.toastrService.error("Arabaya ulaşılamıyor");
      }
    })
    
  }
  GetCarsLargeByCarId(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response=>{
      this.cars = response.data
    })
   }
   createRentalForm(){
    this.rentCarForm = this.formBuilder.group({
      cardNumber:["",Validators.required],
      cardOwner:["",Validators.required],
      expiration:["",Validators.required],
      securityCode:["",Validators.required]
 })
   }
   sales(car:Car){
    if(this.rentCarForm.valid)
    {
      this.toastrService.success("Araç üzerinize kiralandı.");
    }
    else{
      this.toastrService.error("Araç üzerinize kiralanamadı");
    } 
   }

   findPicture(imagePath:string){
    let ilk = imagePath.lastIndexOf('\\');
    let son = imagePath.length;
   let newİmagePath = "assets/images/"+imagePath.slice(ilk+1,son);
   return newİmagePath;
  }
}
