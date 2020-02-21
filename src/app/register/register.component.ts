import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import Token from '../Token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input()

  private url = 'http://85.160.64.233:3000/session/register';
  private username = '';
  private email = '';
  private password = '';
  private passwordcontrol = '';
  private color: string;
  private wrong = false;

  registerClick() {
    if (this.password === this.passwordcontrol) {
    this.http
      .post(this.url, {username: this.username, email: this.email, password: this.password, passwordcontrol: this.passwordcontrol})
      .subscribe(
        (data: any) => {
          this.router.navigate(['/home']);

        }, (error) => {
          this.wrong = true;
          this.color = 'red';
        }
      );
    } else {
      this.wrong = true;
      this.color = 'red';
    }
  }
  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
  }

}
