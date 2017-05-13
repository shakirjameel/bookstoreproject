import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  prn: Number;
  email: String;
  mobile: Number;
  sem: Number;
  password: String;
  semIssueCounter=0;
  weeklyIssueCounter=0;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      prn: this.prn,
      email: this.email,
      mobile: this.mobile,
      sem: this.sem,
      password: this.password,
      semIssueCounter: this.semIssueCounter,
      weeklyIssueCounter: this.weeklyIssueCounter
    }

    //Reguired Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please enter all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Enter all the fields');
    }


    //Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid e-mail id', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Use valid email');
    }

    console.log('User Entered is '+ user.username);
    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You have been registered successfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }

    });

  }

}
