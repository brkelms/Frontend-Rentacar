import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rentalDto';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  rentals:Rental[]=[];     
  customers:Customer[]=[]; 
  colors:Color[]=[];
  brands:Brand[]=[];     
  dataLoaded=false;   
  constructor(private rentalService:RentalService, private brandService:BrandService, private colorService:ColorService, private customerService:CustomerService,private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data

    })
   }
   getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response.data

    })
   }
   getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.dataLoaded=true;
    })
   }
   getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded=true;
    })
   }
   getUserName(){
     let name = localStorage.getItem("email");
     if(!name){
          return "Giriş yapın";
     }
     else
     {
       return name;
     }
   }
   userClose(){
     this.toastrService.success("Çıkış yapıldı")
     localStorage.clear();
   }

}
