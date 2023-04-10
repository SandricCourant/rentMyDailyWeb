import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private apiUrl = 'https://localhost:8443/api/v1/register'

  username:string = 'kiloutou';
  password:string = 'motdepasse';
  user: any;
  token: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    const headers = {
    }
    const body = {
      username: this.username,
      password: this.password
    }
    this.http.post(this.apiUrl, body).subscribe((data: any) =>{
      this.user = data.user;
      this.token = data.token;
    });
  }

}
