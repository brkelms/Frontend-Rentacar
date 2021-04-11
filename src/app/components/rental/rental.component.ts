import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];     
  apiUrl="https://localhost:44377/api/rentals/getrentaldetails";  
  dataLoad=false;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data
      this.dataLoad=true;

    })
   }

}
