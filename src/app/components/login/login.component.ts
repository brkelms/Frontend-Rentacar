import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private autService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
   this.loginForm = this.formBuilder.group({
     email:["",Validators.required],
     password:["",Validators.required]
})
  }

  login(){
    if(this.loginForm.valid)
    {
      let loginModel=Object.assign({},this.loginForm.value)
      this.autService.login(loginModel).subscribe(response =>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("email",this.loginForm.get("email")?.value)
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata")
            
          }
        }
        
      })
    }
    else{
      this.toastrService.error("Form bilgileri eksik","Dikkat");
    }
  }


}
