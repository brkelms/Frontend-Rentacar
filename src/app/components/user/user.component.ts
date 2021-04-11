import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  apiUrl="https://localhost:44377/api/";  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  register(user:User){
    return this.httpClient.post(this.apiUrl+"/auth/register",user)
  }

}
