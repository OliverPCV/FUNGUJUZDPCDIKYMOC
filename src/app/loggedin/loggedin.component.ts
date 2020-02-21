import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../Token';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {



  private urllogout = 'http://85.160.64.233:3000/session/logout';


  logoutClick() {

    const headers = new HttpHeaders()
      .set('User-Token', Token.access);

    console.log(headers);

    this.http
      .delete(this.urllogout, {headers})
      .subscribe(
        (data: any) => {

          Token.access = '';

          console.log(Token.access);

        }, (error) => {

        }
      );
  }
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

}
