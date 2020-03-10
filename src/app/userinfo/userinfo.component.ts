import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../Token';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Authentication} from '../models/Authentication.model';
import {User} from '../models/User.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  private url = 'http://85.160.64.233:3000/user';
  private urllogout = 'http://85.160.64.233:3000/session/logout';
  private id = '';
  private email = '';
  private username = '';

  constructor(private http: HttpClient, private router: Router, private http2: HttpClient, private user: UserService, private auth: AuthenticationService, private userlogout: AuthenticationService) {
    console.log(AuthenticationService.token);

    this.user.getUser()
      .subscribe(
      (data: User) => {
        this.id = data.id;
        this.email = data.email
        this.username = data.username;

        console.log(this.id);
        console.log(this.email);
        console.log(this.username);
       }, (error) => {

      }
    );
  }

  logoutClick() {
    this.userlogout.getLogout()
      .subscribe(
        (data: User) => {
          AuthenticationService.token.access_token = '';
          console.log(AuthenticationService.token.access_token);
          }, (error) => {

        }
      );
  }

  ngOnInit() {
  }

}
