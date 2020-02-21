import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Token from '../Token';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private url = 'http://85.160.64.233:3000/session/login';
  private email = '';
  private password = '';
  private color: string;
  private wrong = false;


  loginClick() {
    this.http
      .post(this.url, {email: this.email, password: this.password})
      .subscribe(
      (data: any) => {
        Token.access = data.access_token;
        console.log(Token.access);

        this.router.navigate(['/loggedin']);

        }, (error) => {
          this.color = 'red';
          this.wrong = true;
      }
    );
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}
