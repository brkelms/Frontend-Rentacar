import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private toasterService:ToastrService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
 })
   }

   register(){
    if(this.registerForm.valid){
      let user = Object.assign({},this.registerForm.value)
      this.authService.register(user).subscribe(response => {
        console.log(response)
        this.toasterService.success("Kayıt Başarılı", "Başarılı")
      })
      
    }else{
        this.toasterService.error("Formunuz eksik", "Dikkat");
    }
   }

}
