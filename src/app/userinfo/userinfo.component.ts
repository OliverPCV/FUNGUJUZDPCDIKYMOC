import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../Token';
import {Router} from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router, private http2: HttpClient) {
    const headers = new HttpHeaders()
      .set('User-Token', Token.access);

    this.http
      .get(this.url, {headers})
      .subscribe(
      (data: any) => {
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
    const headers = new HttpHeaders()
      .set('User-Token', Token.access);

    this.http2
      .delete(this.urllogout, {headers})
      .subscribe(
        (data: any) => {
          Token.access = '';
          console.log(Token.access);

         }, (error) => {

        }
      );
  }

  ngOnInit() {
  }

}
