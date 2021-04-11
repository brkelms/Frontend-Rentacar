import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CustomerComponent } from './components/customerDto/customer.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ToastrModule} from "ngx-toastr";
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { NullPipePipe } from './pipes/null-pipe.pipe';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { FilterComponent } from './components/filter/filter.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { ColorfilterPipe } from './pipes/colorfilter.pipe';
import { BrandfilterPipe } from './pipes/brandfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    RentalComponent,
    ColorComponent,
    BrandComponent,
    CarComponent,
    FilterPipePipe,
    CustomerComponent,
    VatAddedPipe,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    CardetailComponent,
    NullPipePipe,
    RentCarComponent,
    FilterComponent,
    ColorListComponent,
    BrandListComponent,
    ColorfilterPipe,
    BrandfilterPipe
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
