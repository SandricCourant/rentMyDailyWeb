import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  user: any;
  state: boolean = false;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://localhost:8443/api/v1/register').subscribe((data: any) =>{
      this.user = data.user;
    });
  }
  onClick(){
    this.state = true;
  }
}
