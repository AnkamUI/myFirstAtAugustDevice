import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(public router: Router,private LoginService: SharedService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.LoginService.login(this.email, this.password).subscribe(isValid => {
      if (isValid) {
        this.router.navigate(['/home']);
        this.LoginService.show('Logged in successful!', 'success');
      } else {
        this.LoginService.show('Invalid username or password', 'info');
      }
    });
  }
     
  Charts(): void {
    this.router.navigate(['/dashboard']);
    console.log('Navigating to Dashboard...');
  }
}
