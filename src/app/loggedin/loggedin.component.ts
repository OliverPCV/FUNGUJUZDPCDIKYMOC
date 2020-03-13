import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../Token';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {

  private urllogout = 'http://85.160.64.233:3000/session/logout';

  constructor(private http: HttpClient, private userlogout: AuthenticationService) {

  }

  logoutClick() {
    this.userlogout.getLogout()
      .subscribe(
        (data: any) => {

          AuthenticationService.token.access_token = '';


        }, (error) => {

        }
      );
  }


  ngOnInit() {
  }

}
