import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CustomerComponent } from './components/customerDto/customer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
{path:"", pathMatch:"full", component:CarComponent},
{path:"cars/getcarsdetails",  component:CarComponent},
{path:"rentals/getrentaldetails",  component:RentalComponent},
{path:"customers/getcustomerdetails",  component:CustomerComponent},
{path:"cars/getcarsdetails/brand/:brandId",  component:CarComponent},
{path:"cars/getcarsdetails/color/:colorId",  component:CarComponent},
{path:"cars/getcarsdetails/cars/getcarsdetails/car/:carId",  component:CardetailComponent},
{path:"cars/getcarsdetails/car/:carId",  component:CardetailComponent},
{path:"rent-car/car/:carId",  component:RentCarComponent, canActivate:[LoginGuard]},
{path:"login",  component:LoginComponent},
{path:"register",  component:RegisterComponent},
{path:"colors/getall",  component:ColorListComponent},
{path:"brands/getall",  component:BrandListComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
